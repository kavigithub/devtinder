const express = require("express");

const app = express(); //create server

//with router
app.use("/test", (req, res) => {
  res.send("hey i m from test router");
});

app.use("/hello", (req, res) => {
  res.send("hello node");
});

//handle requestion function
app.use("/", (req, res) => {
  res.send("hello from the dashboard of node"); //sending server response
});

//listen server
app.listen(3000);
