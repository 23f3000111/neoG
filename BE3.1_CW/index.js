const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.send("Hello Express");
})

app.get("/about", (req, res) => {
    res.send("This is about Page.");
})

app.get("/contact", (req, res) => {
    res.send("This is contact Page.");
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("Server Started, port-", PORT);
})