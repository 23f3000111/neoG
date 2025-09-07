const {intializeDatabase} = require("./db/db.connect")
const Restaurant = require("./models/restaurant.models")

intializeDatabase()

async function deleteRestaurantById(restaurantId) {
    try {
        const restaurants = await Restaurant.findByIdAndDelete(restaurantId)
    } catch (error) {
        throw error
    }
}
deleteRestaurantById("68bd143dd82ac877e9de6574")

async function deleteRestaurantByName(restaurantName) {
    try {
        const restaurants = await Restaurant.findOneAndDelete({name: restaurantName})
        console.log("Deleted Restaurants:-", restaurants);
    } catch (error) {
        throw error
    }
}
deleteRestaurantByName("Yo China")