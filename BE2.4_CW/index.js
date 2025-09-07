const {intializeDatabase} = require("./db/db.connect")
const Movie = require("./models/movie.models");

intializeDatabase()

async function deleteMovieById(movieID) {
    try {
        const movie = await Movie.findByIdAndDelete(movieID)
    } catch (error) {
        throw error
    }
}
// deleteMovieById("68bd0dbf23d4424f6bafe5e6")


async function deleteMovieByTitle(movieTitle) {
    try {
        const movie = await Movie.findOneAndDelete({title: movieTitle})
        console.log("Deleted Movie:-", movie);
        
    } catch (error) {
        throw error
    }
}
deleteMovieByTitle("DDLJ")