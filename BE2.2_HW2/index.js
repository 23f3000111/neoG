const {intializeDatabase} = require("./db/db.connect")
const Hotel = require("./models/hotel.models")

intializeDatabase()

// const newHotel = {
//   name: "Lake View",
//   category: "Mid-Range",
//   location: "124 Main Street, Anytown",
//   rating: 3.2,
//   reviews: [],
//   website: "https://lake-view-example.com",
//   phoneNumber: "+1234555890",
//   checkInTime: "2:00 PM",
//   checkOutTime: "12:00 PM",
//   amenities: ["Laundry", "Boating"],
//   priceRange: "$$$ (31-60)",
//   reservationsNeeded: true,
//   isParkingAvailable: false,
//   isWifiAvailable: true,
//   isPoolAvailable: false,
//   isSpaAvailable: false,
//   isRestaurantAvailable: false,
//   photos: ["https://example.com/hotel1-photo1.jpg", "https://example.com/hotel1-photo2.jpg"],
// };

const newHotel = {
  name: "Sunset Resort",
  category: "Resort",
  location: "12 Main Road, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://sunset-example.com",
  phoneNumber: "+1299655890",
  checkInTime: "2:00 PM",
  checkOutTime: "11:00 AM",
  amenities: ["Room Service", "Horse riding", "Boating", "Kids Play Area", "Bar"],
  priceRange: "$$$$ (61+)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: true,
  isSpaAvailable: true,
  isRestaurantAvailable: true,
  photos: ["https://example.com/hotel2-photo1.jpg", "https://example.com/hotel2-photo2.jpg"],
};

async function createHotel (newHotel) {
  try {
    const hotel = new Hotel(newHotel)
    await hotel.save();
  } catch (error) {
    throw error
  }
}

// createHotel(newHotel)

async function readAllHotels() {
  try {
    const hotels = await Hotel.find()
    console.log(hotels)
  } catch (error) {
    throw error
  }
}
// readAllHotels()

async function readHotelByName(name) {
  try {
    const hotel = await Hotel.findOne({ name: name })
    console.log(hotel.isRestaurantAvailable)
  } catch (error) {
    throw error
  }
}
// readHotelByName("Lake View")

async function readHotelsWithParking() {
  try {
    const hotels = await Hotel.find({ isParkingAvailable: true })
    console.log(hotels)
  } catch (error) {
    throw error
  }
}
// readHotelsWithParking()

async function readHotelsWithRestaurant() {
  try {
    const hotels = await Hotel.find({ isRestaurantAvailable: true })
    console.log(hotels)
  } catch (error) {
    throw error
  }
}
// readHotelsWithRestaurant()

async function readHotelsByCategory(category) {
  try {
    const hotels = await Hotel.find({ category: category })
    console.log(hotels)
  } catch (error) {
    throw error
  }
}
// readHotelsByCategory("Mid-Range")

async function readHotelsByPriceRange(priceRange) {
  try {
    const hotels = await Hotel.find({ priceRange: priceRange })
    console.log(hotels)
  } catch (error) {
    throw error
  }
}
// readHotelsByPriceRange("$$$$ (61+)")

async function readHotelsByRating(rating) {
  try {
    const hotels = await Hotel.find({ rating: rating })
    console.log(hotels)
  } catch (error) {
    throw error
  }
}
// readHotelsByRating(4.0)

async function readHotelByPhone(phoneNumber) {
  try {
    const hotel = await Hotel.findOne({ phoneNumber: phoneNumber })
    console.log(hotel)
  } catch (error) {
    throw error
  }
}
readHotelByPhone("+1299655890")