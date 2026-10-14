const express = require("express");

const app = express();

//import router file
//const multipleRouter = require("./multiple-routes-handlers");
//app.use(multipleRouter);

//import
const { adminAuth, userAuth, logger } = require("./middleware/auth");
const { checkAge } = require("./middleware/checkAge");
const { checkHRAuthorization } = require("./middleware/checkHR");

app.use("/admin", adminAuth);
//app.use("/movie", checkAge);
app.use(logger);
app.use("/salary", checkHRAuthorization);

app.get("/admin/getAllData", (req, res) => {
  res.send("All data send");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("deleted User");
});

app.use("/test", (req, res) => {
  res.send("hey i m from test router");
});

//check middleware userAuth
app.get("/users", userAuth, (req, res) => {
  console.log(req.query);
  const id = req.query.id;
  const name = req.query.name;
  console.log("id", id);
  console.log("name", name);
  res.send({
    firstName: "Kavita",
    lastName: "Ghatge",
    title: "UI Engineer",
  });
});

app.get("/products/:id/:name", (req, res) => {
  const price = req.query.price;
  const brand = req.query.brand;
  console.log(req.params);
  console.log(req.params.name);
  res.send(price);
  //res.send("done");
});

app.post("/users", (req, res) => {
  res.send("Data scccessfully saved in DB");
});

app.delete("/users", (req, res) => {
  res.send("Data successfully deleted from DB");
});

app.patch("/users", (req, res) => {
  res.send({
    firstName: "Harsha",
  });
});

//////////////////////////////////////////////////////
//(Route Middleware) : checkage// (Route Handler) req,res
app.get("/movie", checkAge, (req, res) => {
  res.send("🎬 Welcome to the movie!");
});

//these are request
app.get("/salary/list", (req, res) => {
  res.send("Salary list");
});

app.get("/salary/history", (req, res) => {
  res.send("Salary history");
});

app.get("/employees", (req, res) => {
  res.send("Employee list");
});

app.listen(3000);
