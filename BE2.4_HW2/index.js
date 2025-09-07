const {intializeDatabase} = require("./db/db.connect")
const Hotel = require("./models/hotel.models")

intializeDatabase()

async function deleteHotelById(hotelID) {
    try {
        const hotel = await Hotel.findByIdAndDelete(hotelID)
    } catch (error) {
        throw error
    }
}
deleteHotelById("68bd1e90a016755e4e3ab65d")

async function deleteHotelByPhoneNumber(hotelPhoneNumber) {
    try {
        const hotel = await Hotel.findOneAndDelete({phoneNumber: hotelPhoneNumber})
        console.log("Deleted Hotel:-", hotel);
        
    } catch (error) {
        throw error
    }
}
deleteHotelByPhoneNumber("+1234555890")