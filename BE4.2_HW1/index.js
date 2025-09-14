const express = require("express")
const app = express()
app.use(express.json())
const PORT = 3000;

const {intializeDatabase} = require("./db/db.connect")
const Restaurant = require("./models/restaurant.models")

intializeDatabase()

// const newRestaurant = {
//   name: "Cha Cha",
//   cuisine: ["Spanish"],
//   location: "123 Main Street, Anytown",
//   rating: 4.0,
//   reviews: [],
//   website: "https://example.com",
//   phoneNumber: "+1234567890",
//   openHours: "Mon-Sun: 11:00 AM - 10:00 PM",
//   priceRange: "$$ (11-30)",
//   reservationsNeeded: true,
//   isDeliveryAvailable: true,
//   menuUrl: "https://example.com/menu",
//   photos: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
// };


async function createRestaurant (newRestaurant) {
    try {
    const restaurant = new Restaurant(newRestaurant)
    await restaurant.save();
    return restaurant;
    }
    catch (error) {
        throw error;
    }
}

app.post("/restaurants", async (req, res) => {
    try {
        const restaurants = await createRestaurant(req.body)
        res.status(200).json({message: "Restaurants added succesfully", restaurants})
    } catch (error) {
        throw error
    }
})

app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`)
})
