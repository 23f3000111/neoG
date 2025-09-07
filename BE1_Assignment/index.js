const {intializeDatabase} = require("./db/db.connect")
const fs = require("fs")
const Cars = require("./models/cars.models")

intializeDatabase()

const jsonData = fs.readFileSync("carsData.json", 'utf-8')
const cardData = JSON.parse(jsonData)

function seedData() {
    for(const carData of cardData){
        const newCars = new Cars({
            brand: carData.brand,
            model: carData.model,
            year: carData.year,
            bodyStyle: carData.bodyStyle,
            fuelType: carData.fuelType,
            transmission: carData.transmission,
            engine: carData.engine,
            mileage: carData.mileage,
            color: carData.color,
            price: carData.price,
            condition: carData.condition,
            description: carData.description,
            photos: carData.photos,
            inMarket: carData.inMarket,
        })
        newCars.save()
    }
}

seedData()