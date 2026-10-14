const express = require("express");

//we create web server
const app = express(); //Creates an Express application. The express() function is a top-level function exported by the express module.

const { userAuthLogin } = require("./middleware/auth");
//Express concept: middleware position/order matters.
//then the login request reaches the middleware first and gets rejected because the user doesn't have a token yet.
//Therefore, you can put the public login route before the protected middleware:
app.post("/user/login", (req, res) => {
  res.send("welcome to home page");
});
//why? //Think about Express's top-to-bottom execution order and:
//The order in which you register middleware and routes can change the behavior of your Express application.
app.use("/user", userAuthLogin);

app.get("/user/profile", (req, res) => {
  res.send("welcome to Profile Page");
});

app.get("/user/orders", (req, res) => {
  res.send("your order list is here");
});

app.get("/user/settings", (req, res) => {
  res.send("please change settings");
});

app.get("/salary", (req, res, next, error) => {
  // Imagine the database failed here
  try {
    res.send("got the salary");
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

//we listen to our server through this port
app.listen(3000);
