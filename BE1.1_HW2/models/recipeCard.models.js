const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: String,
    servings: Number,
    prepTime: String,
    cookTime: String,
    ingredients: [
      {
        type: String,
      },
    ],
    directions: [
      {
        type: String,
      },
    ],
    notes: String,
    imageUrl: String
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
