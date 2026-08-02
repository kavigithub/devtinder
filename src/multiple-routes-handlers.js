const express = require("express");
const router = express.Router();

router.use(
  "/users",
  (req, res, next) => {
    console.log("response user 1");
    //res.send("response user 1");
    next(); //res.send ke baad aayega fir bhi error dega
  },
  (req, res, next) => {
    console.log("response user 2");
    next(); //res.send ke aage aayega fir bhi error dega
    //res.send("reponse user 2");
  },
  (req, res, next) => {
    console.log("response user 3");
    //res.send("respose user 3");
    next();
  },
  (req, res, next) => {
    console.log("response user 4");
    res.send("respose user 4");
    // next();
  },
);

module.exports = router;
