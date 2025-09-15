const express = require("express")
const app = express()
app.use(express.json())
const PORT = 3000;

const {intializeDatabase} = require("./db/db.connect")
const Restaurant = require("./models/restaurant.models")

intializeDatabase()

async function updateRestaurant (restaurantId, updatedData) {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(restaurantId, updatedData, {new: true})
        return restaurant;
    } catch (error) {
        throw error
    }
}


app.post("/restaurants/:id", async(req, res) => {
    try {
        const restaurant = await updateRestaurant(req.params.id, req.body)
        if(restaurant) {
            res.status(200).json({message: "restaurant updated", restaurant:restaurant})
        }
    } catch (error) {
        res.status(404).json({error: "Error uodating data"})
    }
})

app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`)
})
