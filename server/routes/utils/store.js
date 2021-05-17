const { db } = require("../firebase");
let subscriptionSpanShotData;
let getSubscriptionData = async () => {
  console.log("db called");
  return await db.collection("subscription").get();
};
let setSubscriptionData = (snapshot) => {
  subscriptionSpanShotData = snapshot;
};
module.exports = {
  subscriptionSpanShotData,
  getSubscriptionData,
  setSubscriptionData,
};
