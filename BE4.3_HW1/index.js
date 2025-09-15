const express = require("express")
const app = express()
app.use(express.json())
const PORT = 3000;

const {intializeDatabase} = require("./db/db.connect")
const Restaurant = require("./models/restaurant.models")

intializeDatabase()

async function deleteRestaurants (restaurantId) {
    try{
        const deleteRestaurants = await Restaurant.findByIdAndDelete(restaurantId)
        return deleteRestaurants
    } catch (error) {
        throw error
    }
}

async function read (restaurantId) {
    try{
        const read = await Restaurant.find()
        console.log(read);
    } catch (error) {
        throw error
    }
}
read()

app.delete("/restaurants/:restaurantId", async (req, res) => {
    try{
        const deletedRestaurants = await deleteRestaurants(req.params.restaurantId)
        if (deletedRestaurants) {
            res.status(200).json({message: "Restaurants deleted succesfully", deletedRestaurants})
        }
    } catch (error) {
        res.status(500)({error: "Restaurants not found."})
    }
})

app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`)
})
