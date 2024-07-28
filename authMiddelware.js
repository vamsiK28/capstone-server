const jwt = require("jsonwebtoken");
const secretkey = require("./secret_key");

const authMiddelware = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  //console.log(req.header("Authorization"));
  //console.log(token);
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, secretkey);
    //console.log("Accessed", decoded);
    req.userData = decoded;
    next();
  } catch (ex) {
    res.status(400).json({ message: "Invalid token." });
  }
};

module.exports = authMiddelware;
