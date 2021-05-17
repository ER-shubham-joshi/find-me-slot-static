module.exports = {
  dateParser: () => {
    let todayDate = new Date();
    let sTodayDate =
      ("0" + todayDate.getDate()).slice(-2) +
      "-" +
      ("0" + (todayDate.getMonth() + 1)).slice(-2) +
      "-" +
      todayDate.getFullYear();
    return sTodayDate;
  },
  formatMessage: (data) => {
    let message = "";
    message += "Vaccination Sessions for the week : \n";

    data.forEach((info) => {
      message += `\n`;
      message += `Date : ${info.date && info.date}\n`;
      message += `Center Name : ${info.name && info.name}\n`;
      message += `Address : ${info.address && info.address}\n`;
      message += `Pincode : ${info.pincode && info.pincode}\n`;
      message += `Availability : ${
        info.available_capacity && info.available_capacity
      }\n`;
      message += `Vaccine : ${info.vaccine && info.vaccine}\n`;
      message += `Age Limit : ${info.min_age_limit && info.min_age_limit}\n`;
      message += `\n`;
    });
    return message;
  },
};
