const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // surname: {
  //   type: String,
  //   required: true,
  // },
  // name: {
  //   type: String,
  //   required: true,
  // },
  // patronymic: {
  //   type: String,
  //   required: true,
  // },
  fullname: {
    type: String,
    required: true,
    trim: true,
    ref: "client",
  },
  login: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", userSchema);
