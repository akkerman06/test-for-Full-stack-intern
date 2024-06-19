const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  accountNumber: {
    type: Number,
    required: true,
  },
  surname: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  patronymic: {
    type: String,
    required: true,
    trim: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  inn: {
    type: Number,
    required: true,
  },
  fullnameUser: {
    type: String,
    required: true,
    trim: true,
    ref: "user",
  },
  status: {
    type: String,
    required: true,
    default: "Не в работе",
  },
});

module.exports = mongoose.model("client", clientSchema);
