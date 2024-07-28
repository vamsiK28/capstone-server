const mongoose = require("mongoose");
//create schema
const Cart = mongoose.model("cart", new mongoose.Schema({}, { strict: false }));

module.exports = Cart;
