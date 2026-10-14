const express = require("express");
const connectDB = require("./config/database");

const app = express(); //create web server
const Users = require("./models/users");

//to read this req.body we need to use middleware express.json
app.use(express.json());

//this is how we push or send data to server and save it in db
app.post("/signup", async (req, res) => {
  //create new instance of the User Model
  /*   const user = new Users({
    firstName: "kavita",
    lastName: "ghatge",
    emailId: "kavi@.gamil.com",
    gender: "female",
  }); */

  console.log(req.body);
  const user = new Users(req.body);

  try {
    await user.save();
    res.send("User added Successfully");
  } catch (error) {
    console.error("Error Saving Users", error.message);
    res.status(500).send("failed to add user");
  }
});

connectDB()
  .then(() => {
    console.log("Cluster connect for Databse Connection Establish Kavita");
  })
  .catch((err) => {
    console.error("Lost DB Connection", err.message);
  });

//listen server
app.listen(3000, () => console.log("server running on PORT:3000"));
