const express = require("express");
const router = express.Router();
const got = require("got");
const { db } = require("./firebase");
const { auth } = require("./auth/auth");

/* GET users listing. */
router.get("/:param", auth, async (req, res, next) => {
  try {
    let { param } = req.params;
    let response;
    if (param === "states") {
      response = await got(
        "https://cdn-api.co-vin.in/api/v2/admin/location/states"
      );
      res.status(200).json({
        message: "State details fetched",
        data: JSON.parse(response.body),
      });
    }
    if (param === "district") {
      let { stateId } = req.query;
      response = await got(
        `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateId}`
      );
      res.status(200).json({
        message: "District details fetched",
        data: JSON.parse(response.body),
      });
    }
    if (param === "subscriptionInfo") {
      let { email } = req.userData;
      let userInfo = await db
        .collection("subscription")
        .where("email", "==", email)
        .get();
      let data;
      userInfo.forEach((doc) => (data = doc.data()));
      res.status(200).json({
        message: "Subscription details fetched",
        data,
      });
    }
  } catch (oError) {
    console.log(oError);
    res.status(500).json({
      message: "Error",
      error: oError.error
        ? oError.error
        : oError.message
        ? oError.message
        : oError,
    });
  }
});

module.exports = router;
