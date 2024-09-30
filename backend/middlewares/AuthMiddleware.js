require("dotenv").config();
const jwt = require("jsonwebtoken");
const { User } = require("../models/UserModel");

module.exports.userVerification = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(401)
      .json({ status: false, message: "No token provided" });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.status(401).json({ status: false, message: "Invalid token" });
    }

    try {
      const user = await User.findById(data._id);
      if (user) {
        return res.status(200).json({ status: true, user: user.username });
      } else {
        return res
          .status(404)
          .json({ status: false, message: "User not found" });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ status: false, message: "Server error", error: error.message });
    }
  });
};
