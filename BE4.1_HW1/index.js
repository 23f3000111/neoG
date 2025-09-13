const express = require("express")
const app = express()
app.use(express.json())
const PORT = 3000;

const {intializeDatabase} = require("./db/db.connect")
const Restaurant = require("./models/restaurant.models");

intializeDatabase()

async function readAllRestaurants() {
    try {
        const restaurants = await Restaurant.find()
        return restaurants
    } catch (error) {
        throw error
    }
}

app.get("/restaurants", async (req, res) => {
    try {
        const restaurants = await readAllRestaurants()
        if (restaurants.length != 0) {
            res.json(restaurants)
        } else {
            res.status(404).json({error: "No Restaurant Found"})
        }
    } catch (error) {
        res.status(500).json({error: "Failed to fetch Restaurants"})
    }
})

async function readRestaurantByName(restaurantName) {
    try {
        const restaurant = await Restaurant.findOne({name: restaurantName})
        return restaurant
    } catch (error) {
        throw error
    }
}

app.get("/restaurants/:restaurantName", async (req, res) => {
    try {
        const restaurant = await readRestaurantByName(req.params.restaurantName)
        if (restaurant) {
            res.json(restaurant)
        } else {
            res.status(404).json({error: "Restaurant not Found"})
        }
    } catch (error) {
        res.status(500).json({error: "Failed to fetch Restaurant"})
    }
})

async function readRestaurantByPhone(phoneNumber) {
    try {
        const restaurant = await Restaurant.findOne({phoneNumber: phoneNumber})
        return restaurant
    } catch (error) {
        throw error
    }
}

app.get("/restaurants/directory/:phoneNumber", async (req, res) => {
    try {
        const restaurant = await readRestaurantByPhone(req.params.phoneNumber)
        if (restaurant) {
            res.json(restaurant)
        } else {
            res.status(404).json({error: "Restaurant not Found"})
        }
    } catch (error) {
        res.status(500).json({error: "Failed to fetch Restaurant"})
    }
})

async function readRestaurantsByCuisine(cuisineName) {
    try {
        const restaurants = await Restaurant.find({cuisine: cuisineName})
        return restaurants
    } catch (error) {
        throw error
    }
}

app.get("/restaurants/cuisine/:cuisineName", async (req, res) => {
    try {
        const restaurants = await readRestaurantsByCuisine(req.params.cuisineName)
        if (restaurants.length != 0) {
            res.json(restaurants)
        } else {
            res.status(404).json({error: "No Restaurant Found"})
        }
    } catch (error) {
        res.status(500).json({error: "Failed to fetch Restaurants"})
    }
})

async function readRestaurantsByLocation(restaurantLocation) {
    try {
        const restaurants = await Restaurant.find({location: restaurantLocation})
        return restaurants
    } catch (error) {
        throw error
    }
}

app.get("/restaurants/location/:restaurantLocation", async (req, res) => {
    try {
        const restaurants = await readRestaurantsByLocation(req.params.restaurantLocation)
        if (restaurants.length != 0) {
            res.json(restaurants)
        } else {
            res.status(404).json({error: "No Restaurant Found"})
        }
    } catch (error) {
        res.status(500).json({error: "Failed to fetch Restaurants"})
    }
})

app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`)
})
