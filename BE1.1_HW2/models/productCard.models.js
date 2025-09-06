const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    brand: String,
    model: String,
    variant: String,
    tonnage: Number,
    starRating: Number,
    type: String,
    coolingTechnology: String,
    inverter: Boolean,
    multiSensors: Boolean,
    stabilizerFreeOperation: Boolean,
    selfDiagnosis: Boolean,
    dustFilter: Boolean,
    condenserType: String,
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
    wifi: Boolean,
    warranty: {
      type: String,
    },
    specialOffers: [
      {
        type: String,
      },
    ],
    imageUrl: String,
    labels: [
      {
        type: String,
      },
    ]
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
