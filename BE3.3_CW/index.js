const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json())
const cars = [
    {id:1, maker: "Toyota", model: "Camry", year: 2022 },
    {id:2, maker: "Maruti", model: "Ertiga", year: 2022 },
    {id:3, maker: "Swift", model: "Desire", year: 2010 },
    {id:4, maker: "Tata", model: "nano", year: 2018 },
]

app.get("/", (req, res) => {
    res.send("Hello, Express")
})

app.delete("/cars/:id", (req, res) => {
    const carsId = req.params.id

    const index = cars.findIndex(car => car.id == carsId)

    if(index == -1) {
        res.status(404).json({error: "Cars not found"})
    } else{
        cars.splice(index, 1)
        res.status(200).json({message: "cars deleted succesfully"})
    }
})

app.get("/cars", (req, res) => {
    res.send(cars)
})

app.listen(PORT, () => {
    console.log("Server started on port-", PORT);
})
