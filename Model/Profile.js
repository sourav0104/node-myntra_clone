const { Schema, model } = require("mongoose");

const ProfileSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    alt_address: {
      type: String,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    country: {
      type: [""],
      required: true,
      default: false,
    },
    landmark: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("profile", ProfileSchema);