const express = require("express")
const app = express()
app.use(express.json())
const PORT = 3000;

const {intializeDatabase} = require("./db/db.connect")
const Movie = require("./models/movies.models");

intializeDatabase()

async function deleteMovie (movieID) {
    try{
        const deleteMovie = await Movie.findByIdAndDelete(movieID)
        return deleteMovie;
    } catch (error) {
        throw error
    }
}

app.delete("/movies/:id", async(req, res) => {
    try {
        const deletedMovie = await deleteMovie(req.params.id)
        if (deletedMovie) {
            res.status(200).json({message: "Movie Deleted Succesfully", deletedMovie})
        }
    } catch (error) {
        res.status(500).json({error: "Failed to delete movie"})
    }
})

app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`);
})

