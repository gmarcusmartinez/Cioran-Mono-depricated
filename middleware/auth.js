const jwt = require("jsonwebtoken");
const User = require("../models/User");
const asyncHandelr = require("./async");
const ErrorResponse = require("../utils/ErrorResponse");

exports.protect = asyncHandelr(async (req, res, next) => {
  let token;
  const { authorization } = req.headers;

  if (authorization && authorization.startsWith("Bearer")) {
    token = authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorResponse("Not authorized.", 401));
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    console.log(decoded.id);
    next();
  } catch (err) {
    return next(new ErrorResponse("Not authorized.", 401));
  }
});