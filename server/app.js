let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
const cors = require("cors");

let indexRouter = require("./routes/index");
let getDataForUI = require("./routes/getDataForUI");
let session = require("./routes/session").router;
let cronJob = require("./routes/cronJob").router;
let user = require("./routes/user");

let app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../build")));

app.use("/api/getDataForUI", getDataForUI);
app.use("/api/session", session);
app.use("/api/user", user);
app.use("/api/cronJob", cronJob);
app.use("/api/", indexRouter);
app.use("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
