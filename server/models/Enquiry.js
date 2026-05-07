const mongoose = require ('mongoose')

const enquirySchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  destination: String,
  message: String,
  status: {
    type: String,
    enum: ["new", "contacted", "confirmed", "closed"],
    default: "new"
  }
}, { timestamps: true });

const EnquiryModel = mongoose.model("enquiries", enquirySchema)
module.exports = EnquiryModel