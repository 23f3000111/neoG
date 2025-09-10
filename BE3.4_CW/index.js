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

app.post("/cars/:id", (req, res) => {
    const carId = req.params.id
    const updateCarData = req.body
    const carToUpdate = cars.find(car => car.id == carId)

    if(!updateCarData) {
        res.status(404).json({error: "Car not found"})
    } else {
        if(!updateCarData.maker || !updateCarData.model || !updateCarData.year) {
            res.status(400).json({error: "All fields required"})
        } else {
            Object.assign(carToUpdate , updateCarData)
            res.status(200).json({message: "Car updated succesfully", car: carToUpdate})
        }
    }
})

app.get("/cars", (req, res) => {
    res.send(cars)
})

app.listen(PORT, () => {
    console.log("Server started on port-", PORT);
})
