let express = require("express");
let router = express.Router();
let { dateParser } = require("./utils/utilityFunc");
const got = require("got");
const { auth } = require("./auth/auth");

/* GET users listing. */
router.get("/", auth, async (req, res, next) => {
  let { districtId, age, pincode } = req.query;
  try {
    if (!districtId) {
      return res.status(400).json({
        message: `${!districtId ? "District" : ""} is required`,
      });
    }
    let sessionData = await getSession(districtId, age, pincode);
    let message = "Slots are available";
    if (!sessionData.length) {
      message = "No slots are available";
    }
    res.status(200).json({ message, data: sessionData });
  } catch (oError) {
    res.status(500).json({ message: "Error", error: oError });
  }
});

let getSession = async (districtId, age, pincode) => {
  return new Promise(async (resolve, reject) => {
    try {
      response = await got(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${districtId}&date=${dateParser()}`
      );
      let { centers } = JSON.parse(response.body);
      let sessionData = centers.map((center) => {
        return (
          center.sessions &&
          center.sessions.map((session) => {
            session.center_id = center.center_id;
            session.name = center.name;
            session.pincode = center.pincode;
            session.address = center.address;
            return session;
          })
        );
      });
      sessionData = sessionData.flat(1);
      sessionData = sessionData.filter(
        (session) =>
          session.available_capacity > 0 &&
          (age ? session.min_age_limit === (age >= 45 ? 45 : 18) : true) &&
          (pincode ? session.pincode === pincode : true)
      );
      resolve(sessionData);
    } catch (oError) {
      reject(oError);
    }
  });
};

module.exports = { router, getSession };
