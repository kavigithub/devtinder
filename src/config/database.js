//import { MongoClient } from "mongodb";
const mongoose = require("mongoose");

///this code is refernce from namaste dev this is the mongoose example
//this is how you conncet cluster and access the db
const connectDB = async () => {
  //this coluster will only connect to devTIner db
  await mongoose.connect(
    "",
  );
};

module.exports = connectDB;
