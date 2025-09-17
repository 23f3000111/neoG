const express = require("express")
const app = express()
app.use(express.json())
const PORT = 3000;

const {intializeDatabase} = require("./db/db.connect")
const Recipe = require("./models/recipe.model")

intializeDatabase()

app.post("/recipes", async (req, res) => {
    try{
        const newRecipe = new Recipe(req.body)
        const saveRecipe = await newRecipe.save()
        if(saveRecipe) {
            res.status(200).json(saveRecipe)
        }
    } catch (error) {
        res.status(500).json({error: "Failed to add recipe"})
    }
})

app.get("/recipes", async (req, res) => {
    try{
        const recipe = await Recipe.find()
        if(recipe) {
            res.status(200).json(recipe)
        } else {
            res.status(404).json({error: "No recipe found"})
        }
    } catch (error) {
        res.status(500).json({error: "Failed to fetch recipe"})
    }
})

app.get("/recipes/title/:title", async (req, res) => {
    try{
        const recipe = await Recipe.findOne({title: req.params.title})
        if(recipe != 0) {
            res.status(200).json(recipe)
        } else {
            res.status(404).json({error: "No recipe found"})
        }
    } catch (error) {
        res.status(500).json({error: "Failed to fetch recipe"})
    }
})

app.get("/recipes/author/:author", async (req, res) => {
    try{
        const recipe = await Recipe.findOne({author: req.params.author})
        if(recipe != 0) {
            res.status(200).json(recipe)
        } else {
            res.status(404).json({error: "No recipe found"})
        }
    } catch (error) {
        res.status(500).json({error: "Failed to fetch recipe"})
    }
})

app.get("/recipes/difficulty/Easy", async (req, res) => {
    try{
        const recipe = await Recipe.findOne({difficulty: "Easy"})
        if(recipe != 0) {
            res.status(200).json(recipe)
        } else {
            res.status(404).json({error: "No recipe found"})
        }
    } catch (error) {
        res.status(500).json({error: "Failed to fetch recipe"})
    }
})


app.post("/recipes/difficulty/:id", async (req, res) => {
    try{
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body , {new: true})
        if(recipe) {
            res.status(200).json(recipe)
        } else {
            res.status(404).json({error: "No recipe found"})
        }
    } catch (error) {
        res.status(500).json({error: "Failed to fetch recipe"})
    }
})


app.post("/recipes/:title", async (req, res) => {
    try{
        const recipe = await Recipe.findOneAndUpdate({title: req.params.title}, req.body, {new: true})
        if(recipe) {
            res.status(200).json(recipe)
        } else {
            res.status(404).json({error: "No recipe found"})
        }
    } catch (error) {
        res.status(500).json({error: "Failed to fetch recipe"})
    }
})

app.delete("/recipes/:id", async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id)
      if(recipe) {
            res.status(200).json(recipe)
        } else {
            res.status(404).json({error: "No recipe found"})
        }
    } catch (error) {
        res.status(500).json({error: "Failed to fetch recipe"})
    }
})

app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`);
})