const express = require("express")
const app = express()
app.use(express.json())
const PORT = 3000;

const {intializeDatabase} = require("./db/db.connect")
const Movie = require("./models/movies.models");

intializeDatabase()

async function updateMovie (movieId, updatedData) {
    try {
        const movie = await Movie.findByIdAndUpdate(movieId, updatedData, {new: true})
        return movie;
    } catch (error) {
        throw error
    }
}


app.post("/movies/:id", async(req, res) => {
    try {
        const movie = await updateMovie(req.params.id, req.body)
        if(movie) {
            res.status(200).json({message: "movie updated", movie:movie})
        }
    } catch (error) {
        res.status(404).json({error: "Error uodating data"})
    }
})

app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`);
})

