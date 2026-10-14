//import { MongoClient } from "mongodb";
const mongoose = require("mongoose");

//this code is take from mogodb official website mongo db example
/* const client = new MongoClient(
  "mongodb://kavita29oct_db_user:<db_password>@ac-dqisbsz-shard-00-00.jwe9v75.mongodb.net:27017,ac-dqisbsz-shard-00-01.jwe9v75.mongodb.net:27017,ac-dqisbsz-shard-00-02.jwe9v75.mongodb.net:27017/?ssl=true&replicaSet=atlas-wj2cta-shard-0&authSource=admin&appName=ClusterMaruti",
); */

/* const client = new MongoClient(
  "mongodb+srv://kavita29oct_db_user:8U4amMVJkTkWtt7z@clustermaruti.jwe9v75.mongodb.net/",
);
 */
/* export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}
// Call this only when your application terminates
export async function disconnectFromMongoDB() {
  await client.close();
} */

///this code is refernce from namaste dev this is the mongoose example
//this is how you conncet cluster and access the db
const connectDB = async () => {
  //this coluster will only connect to devTIner db
  await mongoose.connect(
    "mongodb+srv://kavita29oct_db_user:8U4amMVJkTkWtt7z@clustermaruti.jwe9v75.mongodb.net/devTinder",
  );
};

module.exports = connectDB;
