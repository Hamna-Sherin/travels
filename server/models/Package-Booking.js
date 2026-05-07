const mongoose = require("mongoose");

const packageBookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  guests: Number,
  date: String,

  packageId: String,
  packageName: String,

  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "pending"
  }
}, { timestamps: true });

const PackageBookingModel = mongoose.model("package_bookings", packageBookingSchema);
module.exports = PackageBookingModel