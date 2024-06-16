const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const dbConnect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("connected");
    }
    catch(err) {
        console.log(err)
    }
}

dbConnect();

app.listen(5000, () => {
  console.log("Backend server is running");
});
