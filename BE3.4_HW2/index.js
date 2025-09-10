const express = require("express")
const app = express()
const PORT = 3000;

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello, Express server")
})

const movies = [

  { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },

  { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 },

  { id: 3, title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994 }

];

app.post("/movies/:id", (req, res) => {
  const movieId = req.params.id
  const updatedMovieData = req.body
  const movieToUpdate = movies.find(movie => movie.id == movieId)

  if(!updatedMovieData) {
    res.status(404).json({error: "Movie not Found"})
  } else {
    if (!updatedMovieData.title || !updatedMovieData.director || !updatedMovieData.year) {
      res.status(400).json({error: "All field requied."})
    } else {
      Object.assign(movieToUpdate, updatedMovieData)
      res.status(200).json({message: "Movie updated succesfully", movie : movieToUpdate})
    }
  }
})

app.get("/movies", (req, res) => {
    res.send(movies)
})

const items = [

  { id: 1, itemName: 'Spoon', color: 'Silver', quantity: 8},

  { id: 2, itemName: 'Fork', color: 'Silver', quantity: 8 },

  { id: 3, itemName: 'Plate', color: 'Off-White', quantity: 6 }

];

app.post("/items/:id", (req, res) => {
  const itemId = req.params.id
  const updatedItemData = req.body
  const itemToUpdate = items.find(item => item.id == itemId)

  if(!updatedItemData) {
    res.status(404).json({error: "Item not Found"})
  } else {
    if (!updatedItemData.itemName || !updatedItemData.color || !updatedItemData.quantity) {
      res.status(400).json({error: "All field requied."})
    } else {
      Object.assign(itemToUpdate, updatedItemData)
      res.status(200).json({message: "Item updated succesfully", item : itemToUpdate})
    }
  }
})

app.get("/items", (req, res) => {
    res.send(items)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})