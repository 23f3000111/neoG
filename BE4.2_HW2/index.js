const express = require("express")
const app = express()
app.use(express.json())
const PORT = 3000;

const {intializeDatabase} = require("./db/db.connect")
const Hotel = require("./models/hotel.models")

intializeDatabase()

// const newHotel = {
//   name: "New Hotel",
//   category: "Mid-Range",
//   location: "123 Main Street, Frazer Town",
//   rating: 4.0,
//   reviews: [],
//   website: "https://hotel-example.com",
//   phoneNumber: "+1234567890",
//   checkInTime: "2:00 PM",
//   checkOutTime: "12:00 PM",
//   amenities: ["Laundry", "Room Service"],
//   priceRange: "$$$ (31-60)",
//   reservationsNeeded: true,
//   isParkingAvailable: true,
//   isWifiAvailable: true,
//   isPoolAvailable: false,
//   isSpaAvailable: false,
//   isRestaurantAvailable: true,
//   photos: ["https://example.com/hotel-photo1.jpg", "https://example.com/hotel-photo2.jpg"],
// };

async function createHotel (newHotel) {
  try {
    const hotel = new Hotel(newHotel)
    await hotel.save();
  } catch (error) {
    throw error
  }
}

app.post("/hotels", async (req, res) => {
    try {
        const hotel = await createHotel(req.body)
        res.status(200).json({message: "Hotel added succesfully", hotel})
    } catch (error) {
        throw error
    }
})

createHotel(newHotel)
app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`)
})
