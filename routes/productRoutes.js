//import express module
const express = require("express");
//create router instance
const router = express.Router();
//import productApi
const productApi = require("../apis/productApis");
const authMiddelware = require("../authMiddelware");
//fetch all records
router.get("/fetch", productApi.products_all);
//insert a record
router.post("/insert", authMiddelware, productApi.insert_product);
//update a record
router.put("/update", authMiddelware, productApi.update_product);
//delete a record
router.delete("/delete", authMiddelware, productApi.delete_product);
//export router
module.exports = router;
