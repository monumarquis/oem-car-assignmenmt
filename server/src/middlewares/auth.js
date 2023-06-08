const jwt = require("jsonwebtoken");
const User = require("../models/user.moldel");

const isAuthenticated = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).send({
        err: "You are not logged In",
      });
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(400).send({
        err: "Token not found",
      });
    }
    const decoded = jwt.verify(token, process.env.SECRET);
    const user = await User.find(decoded.user.id);
    if (!user) {
      return res.status(404).send({ err: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error.message);
    res.status(503).json({
      error: "Token is not valid",
    });
  }
};

module.exports = isAuthenticated;
