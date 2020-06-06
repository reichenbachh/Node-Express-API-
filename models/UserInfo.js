const mongoose = require("mongoose");

const UserInfoSchema = new mongoose.Schema({
  first_name: {
    required: true,
    type: String,
    trim: true,
    maxlength: [30, "first name cannot be more than 50 characters"],
  },
  last_name: {
    required: true,
    type: String,
    trim: true,
    maxlength: [30, "last name cannot be more than 50 characters"],
  },
  age: {
    type: Number,
    min: [0, "age cannot be less than 0"],
    max: [110, "age cannot be more than 110"],
  },
  gender: {
    type: [String],
    enum: ["male", "female", "other"],
  },
  phone: {
    type: String,
    maxlength: [20, "phone cannot exceed 20 charracters"],
    match: [
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
      "please add a valid number",
    ],
  },
  email: {
    type: String,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Enter a valid email"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UserInfo", UserInfoSchema);
