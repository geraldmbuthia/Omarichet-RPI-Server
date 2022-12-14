const express = require("express");
const ejs = require("ejs")
const app = express();
const sensor = require("./routes/sensor.js")

app.use(express.json());
app.use(express.urlencoded({ extended:false}));
app.use("/sensors", sensor);
app.get("/", async (req, res) => {
    res.json("Welcome to Omarichet Server");
})
app.listen(8080, () => {
    console.log("Listening at port 8080")
})