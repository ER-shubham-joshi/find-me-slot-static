let express = require("express");
let router = express.Router();
let { db } = require("./firebase");
let {
  subscriptionSpanShotData,
  getSubscriptionData,
  setSubscriptionData,
} = require("./utils/store");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { adminAuth, auth } = require("./auth/auth");
let { scheduleCronJob, getTask } = require("./cronJob");

/* GET users listing. */
router.post("/create", adminAuth, async (req, res) => {
  try {
    let { email, password } = req.body;
    let output = await db.collection("users").where("email", "==", email).get();
    let data;
    output.forEach((doc) => (data = doc.data()));
    if (data) {
      return res.status(409).json({ message: "User already exist" });
    }
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        res.status(500).json({ message: "Error in creating user" });
      }
      // Store hash in your password DB.
      await db.collection("users").add({
        email,
        password: hash,
      });
    });

    await db.collection("subscription").add({
      email,
    });

    res.status(200).json({ message: "User created successfully" });
  } catch (oError) {
    res.status(500).json({ message: "Error", error: oError });
  }
});

router.post("/subscribe", auth, async (req, res) => {
  try {
    let { email, districtId, pincode, age, stateId } = req.body;

    if (!email || !districtId || !stateId || !age) {
      return res.status(400).json({
        message: `${!email ? "Email" : ""} ${!districtId ? "District" : ""} ${
          !stateId ? "State" : ""
        } ${!age ? "Age" : ""} is required`,
      });
    }

    let querySnapshot = await db
      .collection("subscription")
      .where("email", "==", email)
      .get();

    let docId;

    querySnapshot.forEach(function (doc) {
      docId = doc.id;
    });

    if (!docId) {
      return res.status(400).json({ message: "User does not exist" });
    }

    pincode = pincode ? pincode : "";
    await db
      .collection("subscription")
      .doc(docId)
      .set(
        { email, pincode, stateId, districtId, age, subscribed: true },
        { merge: true }
      );

    subscriptionSpanShotData = await getSubscriptionData();
    setSubscriptionData(subscriptionSpanShotData);
    let task = getTask();
    task && task.destroy();
    scheduleCronJob(subscriptionSpanShotData);

    return res.status(200).json({ message: "Subscribed successfully." });
  } catch (oError) {
    console.log(oError);
    res.status(500).json({ message: "Error", error: oError });
  }
});

router.post("/unsubscribe", auth, async (req, res) => {
  try {
    let { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    let querySnapshot = await db
      .collection("subscription")
      .where("email", "==", email)
      .get();

    let docId;

    querySnapshot.forEach(function (doc) {
      docId = doc.id;
    });

    await db
      .collection("subscription")
      .doc(docId)
      .update({ subscribed: false });

    subscriptionSpanShotData = await getSubscriptionData();
    setSubscriptionData(subscriptionSpanShotData);
    let task = getTask();
    task && task.destroy();
    scheduleCronJob(subscriptionSpanShotData);

    res.status(200).json({ message: "Unsubscribed successfully." });
  } catch (oError) {
    res.status(500).json({ message: "Error", error: oError });
  }
});

router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;

    let output = await db.collection("users").where("email", "==", email).get();
    let data;
    output.forEach((doc) => (data = doc.data()));
    if (!data) {
      return res.status(500).json({ message: "User does not exist" });
    }
    bcrypt.compare(password, data.password, function (err, result) {
      if (result) {
        const token = generateAccessToken(data);
        return res
          .cookie("token", token, {
            httpOnly: true,
          })
          .status(200)
          .json({ message: "Login Successfull" });
      }
      res.status(401).json({ message: "Authentication failed" });
    });
  } catch (oError) {
    console.log(oError);
    res.status(500).json({ message: "Error", error: oError });
  }
});

const generateAccessToken = (data) => {
  return jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
};

module.exports = router;
