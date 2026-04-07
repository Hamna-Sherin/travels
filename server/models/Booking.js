const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
  pickupStreet: String,
  pickupArea: String,
  pickupCity: String,
  pickupState: String,
  pickupPincode: String,

  dropStreet: String,
  dropArea: String,
  dropCity: String,
  dropState: String,
  dropPincode: String,

  pickupDate: String,
  pickupTime: String,
  tripType: String,
  passengers: Number,
  vehicleType: String,
  name: String,
  phone: String,
  status: String
});

const BookingModel = mongoose.model("bookings", bookingSchema)
module.exports = BookingModel