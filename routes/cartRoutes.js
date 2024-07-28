//import express module
const express = require("express");
//create router instance
const router = express.Router();
//import productApi
const cartApi = require("../apis/cartApis");
const authMiddelware = require("../authMiddelware");
//fetch all records
router.get("/fetch", authMiddelware, cartApi.get_cart_items);
//insert a record
router.post("/insert", authMiddelware, cartApi.update_product);
//export router
module.exports = router;
