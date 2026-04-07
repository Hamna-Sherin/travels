const mongoose = require('mongoose')

const packageSchema = new mongoose.Schema({
    name: "String",
    destination: "String",
    category: "String",
    guests: "Number",
    price: "Number",
    duration: "String",
    slots: "Number",
    description: "String",
    image: "String",
});

const PackageModel = mongoose.model("packages", packageSchema)
module.exports = PackageModel