const express = require("express")
const app = express()
app.use(express.json())
const PORT = 3000;

const {intializeDatabase} = require("./db/db.connect")
const Hotel = require("./models/hotel.models");

intializeDatabase()

async function readAllHotels() {
    try {
        const hotels = await Hotel.find()
        return hotels
    } catch (error) {
        throw error
    }
}

app.get("/hotels", async (req, res) => {
    try {
        const hotels = await readAllHotels()
        if (hotels.length != 0) {
            res.json(hotels)
        } else {
            res.status(404).json({error: "No Hotel Found"})
        }
    } catch (error) {
        res.status(500).json({error: "Failed to fetch Hotels"})
    }
})

async function readHotelByName(hotelName) {
    try {
        const hotel = await Hotel.findOne({name: hotelName})
        return hotel
    } catch (error) {
        throw error
    }
}

app.get("/hotels/:hotelName", async (req, res) => {
    try {
        const hotel = await readHotelByName(req.params.hotelName)
        if (hotel) {
            res.json(hotel)
        } else {
            res.status(404).json({error: "Hotel not Found"})
        }
    } catch (error) {
        res.status(500).json({error: "Failed to fetch Hotel"})
    }
})

async function readHotelByPhone(phoneNumber) {
    try {
        const hotel = await Hotel.findOne({phone: phoneNumber})
        return hotel
    } catch (error) {
        throw error
    }
}

app.get("/hotels/directory/:phoneNumber", async (req, res) => {
    try {
        const hotel = await readHotelByPhone(req.params.phoneNumber)
        if (hotel) {
            res.json(hotel)
        } else {
            res.status(404).json({error: "Hotel not Found"})
        }
    } catch (error) {
        res.status(500).json({error: "Failed to fetch Hotel"})
    }
})

async function readHotelsByRating(hotelRating) {
    try {
        const hotels = await Hotel.find({rating: hotelRating})
        return hotels
    } catch (error) {
        throw error
    }
}

app.get("/hotels/rating/:hotelRating", async (req, res) => {
    try {
        const hotels = await readHotelsByRating(req.params.hotelRating)
        if (hotels.length != 0) {
            res.json(hotels)
        } else {
            res.status(404).json({error: "No Hotel Found"})
        }
    } catch (error) {
        res.status(500).json({error: "Failed to fetch Hotels"})
    }
})

async function readHotelsByCategory(hotelCategory) {
    try {
        const hotels = await Hotel.find({category: hotelCategory})
        return hotels
    } catch (error) {
        throw error
    }
}

app.get("/hotels/category/:hotelCategory", async (req, res) => {
    try {
        const hotels = await readHotelsByCategory(req.params.hotelCategory)
        if (hotels.length != 0) {
            res.json(hotels)
        } else {
            res.status(404).json({error: "No Hotel Found"})
        }
    } catch (error) {
        res.status(500).json({error: "Failed to fetch Hotels"})
    }
})

app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`)
})
