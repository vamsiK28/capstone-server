// Import token
let token = require("./token");

// Import modules
const express = require("express");
const mongoose = require("mongoose");

// Import url
const url = require("../url");
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SECRET_KEY = process.env.SECRET_KEY || "lfdghdfngdfklngkjdsngskjdbgjk";

// Create router instance
let router = express.Router();

// Connect to MongoDB using Mongoose
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error in connection", err));

// Create GET API for /login
router.get("/", (req, res) => {
  res.send("GET method is not supported for login. Please use POST.");
});

// Create POST API for /login
router.post("/", async (req, res) => {
  console.log("inside login");
  try {
    // Get the request body
    let obj = req.body;

    // Find user in the database
    let users = await User.find({ u_name: obj.uname }).exec();
    console.log(users);

    if (users.length > 0) {
      try {
        bcrypt.compare(obj.upwd, users[0].u_pwd, function (err, result) {
          // result == true
          console.log(err, result);
          if (err) {
            console.log("Auth Failed");
            res.json({ auth: "failed" });
          } else if (result) {
            let myToken = jwt.sign(
              {
                data: users[0],
              },
              SECRET_KEY,
              { expiresIn: "24h" }
            );
            res.json({ auth: "success", token: myToken });
          }
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("Auth Failed");
      res.json({ auth: "failed" });
    }
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Export router
module.exports = router;
