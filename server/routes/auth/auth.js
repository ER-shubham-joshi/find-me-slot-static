const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Authentication failed" });

  jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
    if (err) return res.status(403).json({ message: "Invalid token" });

    req.userData = data;

    next();
  });
};

const adminAuth = (req, res, next) => {
  let authHeader = req.headers["authorization"];
  const password = authHeader && authHeader.split(" ")[1];
  if (password === process.env.USER_CREATE) {
    return next();
  }
  res.status(401).json({ message: "Authentication failed" });
};

module.exports = { auth, adminAuth };
