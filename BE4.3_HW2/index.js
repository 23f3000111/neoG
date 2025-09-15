const express = require("express")
const app = express()
app.use(express.json())
const PORT = 3000;

const {intializeDatabase} = require("./db/db.connect")
const Hotel = require("./models/hotel.models")

intializeDatabase()

async function deleteHotel (hotelID) {
  try {
    const deleteHotel = await Hotel.findByIdAndDelete(hotelID)
    return deleteHotel
  } catch (error) {
    throw error
  }
}

app.delete("/hotels/:hotelId", async (req, res) => {
  try{
    const deletedHotel = deleteHotel(req.params.hotelId)
    if (deletedHotel) {
      res.status(200).json({message: "Hotel deleted succesfully", deletedHotel})
    }
  } catch (error) {
    res.status(500).json({errro: "Hotel deleted succesfully"})
  }
})

app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`)
})
