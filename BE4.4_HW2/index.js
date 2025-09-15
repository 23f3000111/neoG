const express = require("express")
const app = express()
app.use(express.json())
const PORT = 3000;

const {intializeDatabase} = require("./db/db.connect")
const Hotel = require("./models/hotel.models")

intializeDatabase()

async function updateHotel (hotelId, updatedData) {
    try {
        const hotel = await Hotel.findByIdAndUpdate(hotelId, updatedData, {new: true})
        return hotel;
    } catch (error) {
        throw error
    }
}


app.post("/hotels/:id", async(req, res) => {
    try {
        const hotel = await updateHotel(req.params.id, req.body)
        if(hotel) {
            res.status(200).json({message: "hotel updated", hotel:hotel})
        }
    } catch (error) {
        res.status(404).json({error: "Error uodating data"})
    }
})

app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`)
})
