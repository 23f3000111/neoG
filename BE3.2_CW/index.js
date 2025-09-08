const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json())
const cars = [{id:1, maker: "Toyota", model: "Camry", year: 2022 }]

app.get("/", (req, res) => {
    res.send("Hello, Express")
})

app.post("/cars", (req, res) => {
    const newCar = req.body

    if(!newCar.maker || !newCar.model || !newCar.year){
        res.status(400).json({error: "Maker, model and year are required."})
    } else {
        res.status(201).json({message: "car added succesfully", car: newCar})
    }
})

app.get("/cars", (req, res) => {
    res.send(cars)
})

app.listen(PORT, () => {
    console.log("Server started on port-", PORT);
})