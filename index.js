const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require('./routes/auth')

dotenv.config();

const dbConnect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected");
    }
    catch(err) {
        console.log(err)
    }
}

dbConnect();

app.use(express.json());

app.use("/api/auth", authRoute);

app.listen(8800, () => {
  console.log("Backend server is running");
});
