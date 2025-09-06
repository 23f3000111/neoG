const mongoose = require("mongoose")


const TwitterSchema = new mongoose.Schema({
    profileURL: String,
    fullName: String,
    userName: String,
    bio: String,
    companyName: String,
    city: String,
    portfolioLink: String,
    handle: String,
})

const Twitter = mongoose.model("Twitter", TwitterSchema)

module.exports = Twitter;