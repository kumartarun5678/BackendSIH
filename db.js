// if(proccess.env.NODE_ENV!=="production"){
require('dotenv').config();


const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/vehicle_tracking";
// const MONGODB_URI = process.env.MONGODB_URI;
const connectToMongo = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB successfully!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = connectToMongo;

