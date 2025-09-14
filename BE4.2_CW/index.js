const express = require("express")
const app = express()
app.use(express.json())
const PORT = 3000;

const {intializeDatabase} = require("./db/db.connect")
const Movie = require("./models/movie.models");

intializeDatabase()

// const newMovie = {
//     title: "Title",
//     releaseYear: 2027,
//     genre: ["Action", "Drama"],
//     director: "S. S. Rajamouli",
//     actors: ["Prabhas", "Rocky"],
//     language: "Telugu",
//     country: "India",
//     rating: 9,
//     plot: "A man embarks on a journey to rescue his mother from a tyrant.",
//     awards: "National Film Award",
//     posterUrl: "https://example.com/poster2.jpg",
//     trailerUrl: "https://example.com/trailer2.mp4"
// }

async function createMovie (newMovie) {
    try{
        const movie = new Movie(newMovie)
        await movie.save()
        return movie
    }
    catch (error) {
        throw error
    }
}

app.post("/movies", async (req, res) => {
    try {
        const movie = await createMovie(req.body)
        res.status(200).json({message: "Movie added succesfully", movie})
    } catch (error) {
        throw error
    }
})

app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`);
})

