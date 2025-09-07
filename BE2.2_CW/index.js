const {intializeDatabase} = require("./db/db.connect")
const Movie = require("./models/movie.models");

intializeDatabase()

async function readMovieByTitle (movieTitle) {
    try {
        const movie = await Movie.findOne({title: movieTitle})
        console.log(movie);   
    } catch (error) {
        throw error    
    }
}

// readMovieByTitle("Dilwale Dulhania Le Jayenge")


async function readAllMovies () {
    try {
        const movie = await Movie.find()
        console.log(movie);   
    } catch (error) {
        throw error    
    }
}

// readAllMovies()


async function readMovieByDirector (movieDirector) {
    try {
        const movie = await Movie.find({director: movieDirector})
        console.log(movie);   
    } catch (error) {
        throw error    
    }
}

readMovieByDirector("S. S. Rajamouli")