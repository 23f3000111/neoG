const express = require("express")
const app = express()
const PORT = 3000;

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello,From Express server.")
})


const books = [

  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },

  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },

  { id: 3, title: '1984', author: 'George Orwell', year: 1949 }

];

app.post("/books/:id", (req, res) => {
  const bookId = req.params.id
  const updatedBookData = req.body
  const bookToUpdate = books.find(book => book.id == bookId)

  if(!updatedBookData) {
    res.status(404).json({error: "Book not Found"})
  } else {
    if (!updatedBookData.title || !updatedBookData.author || !updatedBookData.year) {
      res.status(400).json({error: "All field requied."})
    } else {
      Object.assign(bookToUpdate, updatedBookData)
      res.status(200).json({message: "Book updated succesfully", book : bookToUpdate})
    }
  }
})

app.get("/books", (req, res) => {
    res.send(books)
})

const todos = [

  { id: 1, title: 'Water the plants', day: 'Saturday' },

  { id: 2, title: 'Go for a walk', day: 'Sunday' }

];

app.post("/todos/:id", (req, res) => {
  const todoId = req.params.id
  const UpdatedTodo = req.body
  const todoToUpdate = todos.find(todo => todo.id == todoId)

  if(!UpdatedTodo) {
    res.status(404).json({error: "Todo not found"})
  } else {
    if(!UpdatedTodo.title || !UpdatedTodo.day) {
            res.status(400).json({error: "All field requied."})
    } else {
      Object.assign(todoToUpdate, UpdatedTodo)
      res.status(200).json({messgae: "todo updated succesfully", todo: todoToUpdate})
    }
  }
})

app.get("/todos", (req, res) => {
  res.send(todos)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
