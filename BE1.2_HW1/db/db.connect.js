const mongoose = require('mongoose')
require("dotenv").config()

const mongouri = process.env.MONGODB;

const intializeDatabase = async () => {
    await mongoose
            .connect(mongouri)
            .then(() => {
                console.log("Connected to Database");
            })
            .catch((error) => {
                console.log("Error",error);
            })
}

module.exports = {intializeDatabase}