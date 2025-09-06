const mongoose = require("mongoose");

const facebookPostSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    verified: Boolean,
    postedAt: Date,
    content: {
      type: String,
      required: true,
    },
    hashtags: [
      {
        type: String,
      },
    ],
    mentions: [
      {
        type: String,
      },
    ],
    eventDetails: {
      title: String,
      performers: [String],
      date: String,
      time: String,
      venue: String,
      address: String,
      specialGuest: String,
    },
    imageUrl: String,
    reactions: Number,
    commentsCount: Number,
    sharesCount: Number
  }
);

const FacebookPost = mongoose.model("FacebookPost", facebookPostSchema);

module.exports = FacebookPost;
