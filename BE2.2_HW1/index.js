const {intializeDatabase} = require("./db/db.connect")
const Restaurant = require("./models/restaurant.models")

intializeDatabase()

// const newRestaurant = {
//   name: "Somi",
//   cuisine: ["Greek"],
//   location: "11 Main Road, Gem",
//   rating: 4.3,
//   reviews: [],
//   website: "https://somi-example.com",
//   phoneNumber: "+1234997390",
//   openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
//   priceRange: "$$ (11-30)",
//   reservationsNeeded: false,
//   isDeliveryAvailable: true,
//   menuUrl: "https://somi-example.com/menu",
//   photos: ["https://example.com/somi-photo1.jpg", "https://example.com/somi-photo2.jpg"],
// };

const newRestaurant = {
  name: "Yo China",
  cuisine: ["Chinese", "Italian"],
  location: "MG Road, Bangalore",
  rating: 3.9,
  reviews: [],
  website: "https://yo-example.com",
  phoneNumber: "+1288997392",
  openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isDeliveryAvailable: false,
  menuUrl: "https://yo-example.com/menu",
  photos: ["https://example.com/yo-photo1.jpg", "https://example.com/yo-photo2.jpg", "https://example.com/yo-photo3.jpg"]
};


async function createRestaurant (newRestaurant) {
    try {
    const restaurant = new Restaurant(newRestaurant)
    await restaurant.save();
    }
    catch (error) {
        throw error;
    }
}
// createRestaurant(newRestaurant);


async function readAllRestaurants () {
    try {
        const restaurant = await Restaurant.find()
        console.log(restaurant);   
    } catch (error) {
        throw error    
    }
}
// readAllRestaurants()


async function readRestaurantsByName (name) {
    try {
        const restaurant = await Restaurant.find({name: name})
        console.log(restaurant);   
    } catch (error) {
        throw error    
    }
}
// readRestaurantsByName("New Restaurant")


async function readRestaurantsByReservation (reservation) {
    try {
        const restaurant = await Restaurant.find({reservationsNeeded: reservation})
        console.log(restaurant);   
    } catch (error) {
        throw error    
    }
}
// readRestaurantsByReservation(true)


async function readRestaurantsByDelivery (delivery) {
    try {
        const restaurant = await Restaurant.find({isDeliveryAvailable: delivery})
        console.log(restaurant);   
    } catch (error) {
        throw error    
    }
}
// readRestaurantsByDelivery(true)


async function readRestaurantsByPhone (number) {
    try {
        const restaurant = await Restaurant.findOne({phoneNumber: number})
        console.log(restaurant);   
    } catch (error) {
        throw error    
    }
}
// readRestaurantsByPhone("+1288997392")


async function readRestaurantsByCuisine (cuisine) {
    try {
        const restaurant = await Restaurant.find({cuisine: cuisine})
        console.log(restaurant);   
    } catch (error) {
        throw error    
    }
}
readRestaurantsByCuisine("Italian")