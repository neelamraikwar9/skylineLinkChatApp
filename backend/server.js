const express = require("express"); //importing express
const dotenv = require("dotenv");

const app = express(); //created instance of this express variable.
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running successfully.");
});

// app.get()

const PORT = process.env.PORT || 6000;
// with the help of app variable we are starting our own server.
app.listen(5000, console.log(`Server Started on the PORT ${PORT}`));
