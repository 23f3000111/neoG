const express = require("express")
const app = express()
const PORT = 3000

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello, Express server.")
})


const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
]


app.post("/books", (req, res) => {
    const newBook = req.body
    if (!newBook.id || !newBook.title || !newBook.author || !newBook.year) {
        return res.status(400).json({ error: "Missing book data" })
    }
    books.push(newBook)
    res.status(201).json({message: "added succesfully", book: newBook})
})

app.get("/books", (req, res) => {
    res.send(books)
})

const todos = [
  { id: 1, title: 'Water the plants', day: 'Saturday' }
]


app.post("/todos", (req, res) => {
  const newTodo = req.body
  if (!newTodo.id || !newTodo.title || !newTodo.day) {
    return res.status(400).json({ error: "Missing todo data" })
  }
  todos.push(newTodo)
  res.status(201).json({message: "added succesfully", todo: newTodo})
})

app.get("/todos", (req, res) => {
  res.send(todos)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
