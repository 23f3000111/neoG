const express = require("express")
const app = express()
app.use(express.json())
const PORT = 3000;

const { intializeDatabase } = require("./db/db.connect")
const Book = require("./models/books.model")

intializeDatabase()

app.post("/books", async (req, res) => {
    try {
        const bookData = req.body
        const newBook = new Book(bookData)
        const savedBook = await newBook.save()
        res.status(201).json(savedBook)
    } catch (error) {
        res.status(500).json({ error: "Failed to add book" })
    }
})

app.get("/books", async (req, res) => {
    try {
        const books = await Book.find()
        if (books.length != 0) {
            res.json(books)
        } else {
            res.status(404).json({ error: "No Book Found" })
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Books" })
    }
})

app.get("/books/title/:title", async (req, res) => {
    try {
        const book = await Book.findOne({ title: req.params.title })
        if (book) {
            res.json(book)
        } else {
            res.status(404).json({ error: "Book not Found" })
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Book" })
    }
})

app.get("/books/author/:author", async (req, res) => {
    try {
        const books = await Book.find({ author: req.params.author })
        if (books.length != 0) {
            res.json(books)
        } else {
            res.status(404).json({ error: "No Book Found" })
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Books" })
    }
})

app.get("/books/genre/:genre", async (req, res) => {
    try {
        const books = await Book.find({ genre: req.params.genre })
        if (books.length != 0) {
            res.json(books)
        } else {
            res.status(404).json({ error: "No Book Found" })
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Books" })
    }
})

app.get("/books/year/:year", async (req, res) => {
    try {
        const books = await Book.find({ publishedYear: req.params.year })
        if (books.length != 0) {
            res.json(books)
        } else {
            res.status(404).json({ error: "No Book Found" })
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Books" })
    }
})

app.post("/books/:id/rating", async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            { rating: req.body.rating },
            { new: true }
        )
        if (updatedBook) {
            res.json(updatedBook)
        } else {
            res.status(404).json({ error: "Book does not exist" })
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to update Book" })
    }
})

app.post("/books/title/:title", async (req, res) => {
    try {
        const updatedBook = await Book.findOneAndUpdate(
            { title: req.params.title },
            req.body,
            { new: true }
        )
        if (updatedBook) {
            res.json(updatedBook)
        } else {
            res.status(404).json({ error: "Book does not exist" })
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to update Book" })
    }
})

app.delete("/books/:id", async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id)
        if (deletedBook) {
            res.json({ message: "Book deleted successfully" })
        } else {
            res.status(404).json({ error: "Book not found" })
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to delete Book" })
    }
})

app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`)
})
