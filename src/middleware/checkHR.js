const checkHRAuthorization = (req, res, next) => {
  if (req.headers.authorization === "HR") {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = { checkHRAuthorization };
