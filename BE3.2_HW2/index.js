const express = require("express")
const app = express()
const PORT = 3000;

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Express server")
})

const movies = [

  { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },

  { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 }

];

app.post("/movies", (req, res) => {
    const newMovie = req.body
    if (!newMovie.id || !newMovie.title || !newMovie.director || !newMovie.year) {
        return res.status(400).json({error: "missing Data"})
    }
    movies.push(newMovie)
    res.status(201).json({message: "added Succesfully", movie : newMovie})
})

app.get("/movies", (req, res) => {
    res.send(movies)
})

const items = [

  { id: 1, itemName: 'Spoon', color: 'Silver', quantity: 8},

 { id: 2, itemName: 'Fork', color: 'Silver', quantity: 8 }

];

app.post("/items", (req, res) => {
    const newItem = req.body
    if(!newItem.id || !newItem.itemName || !newItem.color || !newItem.quantity) {
        return res.status(400).json({error: "missing Data"})
    }
    items.push(newItem)
    res.status(201).json({message: "added succesfully", item: newItem})
})

app.get("/items", (req, res) => {
    res.send(items)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})