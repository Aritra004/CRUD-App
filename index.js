const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("hello from node api server");
});

mongoose
  .connect(
    "mongodb+srv://aritradebnath1:kIA0NgrXl3UAs1Au@backenddb.kfsgfic.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backenddb"
  )
  .then(() => {
    console.log("connected to the databse");
  })
  .catch(() => {
    console.log("connection failed");
  });
