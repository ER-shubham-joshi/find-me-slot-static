const { getSession } = require("./session");
const { dateParser, formatMessage } = require("./utils/utilityFunc");
let express = require("express");
let router = express.Router();
let {
  subscriptionSpanShotData,
  getSubscriptionData,
  setSubscriptionData,
} = require("./utils/store");
const nodemailer = require("nodemailer");
const cron = require("node-cron");
const { adminAuth } = require("./auth/auth");
let task;
let NextMailTime = {};

router.post("/start", adminAuth, async (req, res) => {
  try {
    startCronJob();
    res.status(200).json({ message: "Cron job started successfully" });
  } catch (oError) {
    res
      .status(500)
      .json({ message: "Error in starting cron job", error: oError });
  }
});

router.post("/stop", adminAuth, async (req, res) => {
  try {
    if (task) {
      task.destroy();
      task = undefined;
      res.status(200).json({ message: "Cron job stopped successfully" });
    } else {
      res.status(400).json({ message: "No cron job available to stop" });
    }
  } catch (oError) {
    res
      .status(500)
      .json({ message: "Error in starting cron job", error: oError });
  }
});

let scheduleCronJob = async (snapshotData) => {
  task = cron.schedule(`*/${process.env.refreshTime} * * * * *`, async () => {
    try {
      let aDistrictId = [];
      let subscribedUserInfo = [];
      snapshotData.forEach((doc) => {
        let data = doc.data();
        let { districtId } = data.subscribed && data;
        districtId &&
          subscribedUserInfo.push(data) &&
          aDistrictId.push(districtId);
      });
      aDistrictId = [...new Set(aDistrictId)];
      let availableSessions = {};
      for (let districtId of aDistrictId) {
        availableSessions[districtId] = await getSession(districtId);
      }
      let emailUsers = [];
      subscribedUserInfo.forEach((info) => {
        let tempObj = {};
        let { pincode, age, districtId } = info;
        tempObj.email = info.email;
        tempObj.data = availableSessions[districtId];
        let filteredData = tempObj.data.filter(
          (session) =>
            session.min_age_limit === (age >= 45 ? 45 : 18) &&
            (pincode ? session.pincode === pincode : true)
        );
        tempObj.data = filteredData.length && filteredData;
        tempObj.data.length && emailUsers.push(tempObj);
      });
      await sendEmail(emailUsers, NextMailTime);
    } catch (oError) {
      console.log(
        oError.error
          ? oError.error
          : oError.message
          ? oError.message
          : oError.message
      );
    }
  });
};

let sendEmail = async (emailUsers, NextMailTime) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });
  for (user of emailUsers) {
    let { email, data } = user;
    if (!NextMailTime[email] || NextMailTime[email] < new Date().getTime()) {
      let mailOptions = {
        to: email,
        priority: "high",
        subject: `${dateParser()} : Vaccine slots are available `,
        text: formatMessage(data),
      };
      let mailNotSent = [];
      try {
        console.log("mail.sent");
        await transporter.sendMail(mailOptions);
        NextMailTime[email] =
          new Date().getTime() + process.env.emailFrequency * 60 * 1000;
      } catch (oError) {
        console.log(oError);
        mailNotSent.push(
          oError.error ? oError.error : oError.message ? oError.message : oError
        );
      }
    }
  }
};

let getTask = () => {
  return task;
};

let startCronJob = async () => {
  try {
    subscriptionSpanShotData = subscriptionSpanShotData
      ? subscriptionSpanShotData
      : await getSubscriptionData();
    setSubscriptionData(subscriptionSpanShotData);
    task && task.destroy();
    scheduleCronJob(subscriptionSpanShotData);
  } catch (oError) {
    console.log(oError);
  }
};

module.exports = {
  router,
  getSubscriptionData,
  scheduleCronJob,
  getTask,
  startCronJob,
};
