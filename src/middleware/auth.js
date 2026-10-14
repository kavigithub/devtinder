const adminAuth = (req, res, next) => {
  console.log("Admin log getting check");
  const token = "xyz";
  const isAdminAuthorise = token === "xyz";
  if (!isAdminAuthorise) {
    res.status(401).send("Unauthorised Admin Request");
  } else {
    next(); //iske baad /admin respective jo kuch bhi routes hai uske liye ye admmin auth check hoga
  }
};

const userAuth = (req, res, next) => {
  console.log("User logged check");
  const token = "xyz";
  const isUserAuthorised = token === "xyz";
  if (!isUserAuthorised) {
    res.status(401).send("Unauthorised user request");
  } else {
    next();
  }
};

const userAuthLogin = (req, res, next) => {
  if (req.headers.authorization === "USER") {
    next();
  } else {
    res.status(401).send("authentication required");
  }
};

const logger = (req, res, next) => {
  console.log("Request received");
  next();
};

module.exports = {
  adminAuth,
  userAuth,
  logger,
  userAuthLogin,
};
