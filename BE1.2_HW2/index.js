const { intializeDatabase } = require("./db/db.connect")
const fs = require("fs")
const Books = require("./models/books.models")

intializeDatabase();

const jsonData = fs.readFileSync("booksdata.json", "utf-8")
const booksData = JSON.parse(jsonData)

function seedData(){
    for(const bookData of booksData){
        const newBook = new Books({
            title:bookData.title,
            author:bookData.author,
            publishedYear:bookData.publishedYear,
            genre:bookData.genre,
            language:bookData.language,
            country:bookData.country,
            rating:bookData.rating,
            summary:bookData.summary,
            coverImageUrl:bookData.coverImageUrl,
        })
        newBook.save()
    }
}

seedData()