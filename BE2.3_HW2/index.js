const {intializeDatabase} = require("./db/db.connect")
const Hotel = require("./models/hotel.models")

intializeDatabase()

async function updateHotelById (hotelId, update) {
    try{
        const hotel = await Hotel.findByIdAndUpdate(hotelId, update, {new: true})
        console.log(hotel);
    } catch (error) {
        throw error
    }
}
// updateHotelById("68bd3332443b3c4527425275", {checkOutTime : "11:00 AM"})


async function updateHotel (hotelName, update) {
    try{
        const hotel = await Hotel.findOneAndUpdate({name: hotelName}, update, {new: true})
        console.log(hotel);
    } catch (error) {
        throw error
    }
}
// updateHotel("Sunset Resort", {rating: 4.2})


async function updateHotelByPhoneNumber (phoneNumber, update) {
    try{
        const hotel = await Hotel.findOneAndUpdate({phoneNumber: phoneNumber}, update, {new: true})
        console.log(hotel);
    } catch (error) {
        throw error
    }
}
updateHotelByPhoneNumber("+1299655890", {phoneNumber : "+1997687392"})