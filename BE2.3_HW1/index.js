const {intializeDatabase} = require("./db/db.connect")
const Restaurant = require("./models/restaurant.models")

intializeDatabase()

async function updateRestaurantById (restaurantId, update) {
    try{
        const restaurant = await Restaurant.findByIdAndUpdate(restaurantId, update, {new: true})
        console.log(restaurant);
    } catch (error) {
        throw error
    }
}
// updateRestaurantById("68bd284345ad05a885708ecd", {rating: 4.1})


async function updateRestaurant (restaurantName, update) {
    try{
        const restaurant = await Restaurant.findOneAndUpdate({name: restaurantName}, update, {new: true})
        console.log(restaurant);
    } catch (error) {
        throw error
    }
}
// updateRestaurant("Somi", {name: "Som Sarovar"})


async function updateRestaurantByPhoneNumber (phoneNumber, update) {
    try{
        const restaurant = await Restaurant.findOneAndUpdate({phoneNumber: phoneNumber}, update, {new: true})
        console.log(restaurant);
    } catch (error) {
        throw error
    }
}
updateRestaurantByPhoneNumber("+1288997392", {isDeliveryAvailable : true})