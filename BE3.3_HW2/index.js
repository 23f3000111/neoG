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

app.delete("/movies/:id", (req, res) => {
    const movieId = req.params.id
    const index = movies.findIndex(movie => movie.id == movieId)

    if(index == -1) {
        res.status(404).json({error: "Movie not found."})
    } else {
        movies.splice(index, 1)
        res.status(200).json({message: "Movie deleted succesfully."})
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

app.delete("/items/:id", (req, res) => {
    const itemsId = req.params.id
    const index = items.findIndex(item => item.id == itemsId)

    if(index == -1) {
        res.status(404).json({error: "Item not found."})
    } else {
        items.splice(index, 1)
        res.status(200).json({message: "item deleted succesfully."})
    }
})

app.get("/items", (req, res) => {
    res.send(items)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})