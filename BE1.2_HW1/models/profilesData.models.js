const mongoose = require("mongoose")

const profilesDataSchema = new mongoose.Schema({
    fullName: String,
    username: String,
    bio: String,
    profilePicUrl: String,
    followingCount: Number,
    followerCount: Number,
    companyName: String,
    location: String,
    portfolioUrl:String,
},
{
    timestamps: true,
})

const ProfilesData = mongoose.model("ProfilesData", profilesDataSchema)
module.exports = ProfilesData;