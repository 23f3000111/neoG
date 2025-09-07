const {intializeDatabase} = require("./db/db.connect")
const Movie = require("./models/movie.models");

intializeDatabase()

async function updateMovieById (movieId, update) {
    try {
        const movie = await Movie.findByIdAndUpdate(movieId, update, {new: true})
        console.log(movie);
    } catch (error) {
        throw error;
    }
}
// updateMovieById('68bc29eeeeb87abe1b1de777', {rating: 8.1})


async function updateMovieDetail (movieTitle, update){
    try {
        const movie = await Movie.findOneAndUpdate({title: movieTitle}, update, {new: true})
        console.log(movie);
    } catch (error) {
        throw error
    }
}
updateMovieDetail("DDLJ", {genre: ['Drama', 'Musical']})