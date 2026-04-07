const mongoose = require('mongoose')

const DestinationSchema = new mongoose.Schema({
    Destination: String,
    Location: String,
    Category: String,
    Description: String,
    Image: String,
    Details: String
    
})

const DestinationModel = mongoose.model("destinations", DestinationSchema)
module.exports = DestinationModel