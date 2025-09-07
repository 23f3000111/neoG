const { intializeDatabase } = require("./db/db.connect")
const Car = require("./models/cars.models")

intializeDatabase()

// const carData = {
//   brand: "Ford",
//   model: "Mustang",
//   year: 2019,
//   bodyStyle: "Convertible",
//   fuelType: "Gasoline",
//   transmission: "Automatic",
//   engine: "5.0L V8",
//   mileage: 25000,
//   color: "Red",
//   price: 3500000,
//   condition: "Used",
//   description: "Exciting Ford Mustang convertible with powerful V8 engine.",
//   photos: [
//     "https://example.com/mustang-photo1.jpg",
//     "https://example.com/mustang-photo2.jpg",
//     "https://example.com/mustang-photo3.jpg"
//   ]
// }

const carData = {
  brand: "Honda",
  model: "Civic",
  year: 2018,
  bodyStyle: "Coupe",
  fuelType: "Gasoline",
  transmission: "Manual",
  engine: "1.5L Turbocharged Inline-4",
  mileage: 40000,
  color: "Black",
  price: 1800000,
  condition: "Used",
  description: "Sporty Civic coupe with low mileage and manual transmission.",
  photos: [
    "https://example.com/civic-photo1.jpg",
    "https://example.com/civic-photo2.jpg",
    "https://example.com/civic-photo3.jpg"
  ]
}

async function createCar(newCar) {
  try {
    const car = new Car(newCar)
    await car.save()
  } catch (error) {
    throw error
  }
}
// createCar(carData)

async function readAllCars() {
  try {
    const cars = await Car.find()
    console.log(cars)
  } catch (error) {
    throw error
  }
}
// readAllCars()

async function readCarsByBrand(brand) {
  try {
    const cars = await Car.find({ brand: brand })
    console.log(cars)
  } catch (error) {
    throw error
  }
}
// readCarsByBrand("Ford")

async function readCarsByColor(color) {
  try {
    const cars = await Car.find({ color: color })
    console.log(cars)
  } catch (error) {
    throw error
  }
}
// readCarsByColor("Black")

async function updateCarPriceByModel(model, price) {
  try {
    const car = await Car.findOneAndUpdate({ model: model }, { price: price }, { new: true })
    console.log(car)
  } catch (error) {
    throw error
  }
}
// updateCarPriceByModel("Corolla", 2300000)

async function updateCarConditionByModel(model, condition) {
  try {
    const car = await Car.findOneAndUpdate({ model: model }, { condition: condition }, { new: true })
    console.log(car)
  } catch (error) {
    throw error
  }
}
// updateCarConditionByModel("Model S", "Used")

async function deleteCarById(carId) {
  try {
    const car = await Car.findByIdAndDelete(carId)
    console.log("Deleted Car:", car)
  } catch (error) {
    throw error
  }
}
// deleteCarById("68bd0668f518bb2f91bda1cc")

async function deleteCarByBodyStyle(bodyStyle) {
  try {
    const car = await Car.findOneAndDelete({ bodyStyle: bodyStyle })
    console.log("Deleted Car:", car)
  } catch (error) {
    throw error
  }
}
deleteCarByBodyStyle("Coupe")