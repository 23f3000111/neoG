const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    brand: String,
    description: String,
    price: {
      type: Number,
      required: true,
    },
    originalPrice: Number,
    discount: String,
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    ratingsCount: Number,
    reviewsCount: Number,
    features: [
      {
        type: String,
      },
    ],
    effectivePixels: String,
    sensorType: String,
    wifi: Boolean,
    videoResolution: String,
    warranty: String,
    availability: String,
    delivery: String,
    labels: [
      {
        type: String,
      },
    ],
    imageUrl: String,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
