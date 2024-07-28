//import express module
const express = require("express");
//create router instance
const router = express.Router();
const authMiddelware = require("../authMiddelware");

//import productApi
const userApi = require("../apis/userApis");
//fetch all records
router.get("/fetchUser", authMiddelware, userApi.users_all);
//insert a record
router.post("/insertUser", authMiddelware, userApi.insert_user);
//update a record
router.put("/updateUser", authMiddelware, userApi.update_user);
//delete a record
router.delete("/deleteUser", authMiddelware, userApi.delete_user);
//export router
module.exports = router;
