const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    calories: Number,
    carbohydrates: String,
    fat: String,
    imageUrl:String,
  }
);

const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;
