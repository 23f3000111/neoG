const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    colors: [
      {
        type: String,
      },
    ],
    sizes: [
      {
        type: Number,
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    isNew: {
      type: Boolean,
      default: false,
    },
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
