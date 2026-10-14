const checkAge = (req, res, next) => {
  let getAgeFromReq = req.query.age;
  if (getAgeFromReq >= 18) {
    next(); //Let the request continue
  } else {
    res.status(401).send("Not Allowed to watch movie");
  }
};

module.exports = {
  checkAge,
};
