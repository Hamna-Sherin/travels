// models/Notification.js
const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
  title: String,
  message: String,
  type: { type: String, default: "info" }, // success, error, info
  read: { type: Boolean, default: false }
}, { timestamps: true });

const NotificationModel= mongoose.model("Notification", NotificationSchema);
module.exports = NotificationModel;