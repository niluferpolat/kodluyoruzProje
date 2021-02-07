const mongoose = require("mongoose");

const adoptSchema = mongoose.Schema({
    title: String,
    content: String,
    image: String,
    province: String,
    town: String,
    gender: String,
    age: String,
    species: String,
    communication: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const Adopts = mongoose.model("Adopt", adoptSchema);

module.exports = Adopts