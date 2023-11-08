const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      minLength: [4, "value cannot be less than 4"],
      maxLength: [8, "value cannot be greater than 8"],
    },
    lastName: {
      type: String,
      minLength: [4, "value cannot be less than 4"],
      maxLength: [8, "value cannot be greater than 8"],
    },
    email: {
      type: String,
      validate: {
        validator: (data) => {
          console.log(data);
          return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(data);
        },
        message: `email is invalid`,
      },
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    address: {
      type: String,
    },
    mobile: {
      type: Number,
    },
    comments: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
