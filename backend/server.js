const express = require("express"); //importing express
const dotenv = require("dotenv");
const connectDB = require("./config/db");
// const { chats } = require("./config")
const userRoutes = require("./routes/userRoutes"); 

dotenv.config();

connectDB(); 
const app = express(); //created instance of this express variable.

app.use(express.json());  // to accept JSON Data.

app.get("/", (req, res) => {
  res.send("API is running successfully.");
});

// app.get()

app.use('/api/user', userRoutes) // we are going to abstract all of the logic for routes related to the user  inside of user route file.

const PORT = process.env.PORT || 6000;
// with the help of app variable we are starting our own server.
app.listen(5000, console.log(`Server Started on the PORT ${PORT}`));
