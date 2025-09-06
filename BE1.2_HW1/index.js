const { intializeDatabase } = require("./db/db.connect");
const Profiles = require("./models/profilesData.models");
const fs = require("fs");

intializeDatabase();

const jsonData = fs.readFileSync("profilesData.json", "utf-8");
const profilesData = JSON.parse(jsonData);

function seedData() {
  try {
    for (const profileData of profilesData) {
      const newProfile = new Profiles({
        fullName: profileData.fullName,
        username: profileData.username,
        bio: profileData.bio,
        profilePicUrl: profileData.profilePicUrl,
        followingCount: profileData.followingCount,
        followerCount: profileData.followerCount,
        companyName: profileData.companyName,
        location: profileData.location,
        portfolioUrl: profileData.portfolioUrl,
      });
      newProfile.save()
    }
  } catch (error) {
    console.log("error", error);
  }
}

seedData()