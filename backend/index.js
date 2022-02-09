const express = require("express");
const cors = require("cors");
const products = require("./products")
const app = express();
app.use(express.json()) // Configuring a middleware function => Increase the functionality of our application
app.use(cors()) // Enable us to access our node js api from our react application
app.get("/", (req, res) => {
    res.send("Welcome to our online shop api")
}) // req => is what is coming in from the frontend while res => is whatever will be giving back from this api
app.get("/products", (req,res) => {
    res.send(products)
})
const port = process.env.PORT || 5000
app.listen(port, console.log(`Server running on port ${port}`))