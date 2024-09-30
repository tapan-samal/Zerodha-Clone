const { Schema } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Provide username!"],
  },
  email: {
    type: String,
    required: [true, "Provide email address!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Provide password!"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = { userSchema };
