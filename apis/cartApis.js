const Cart = require("../model/Cart");

const get_cart_items = async (req, res) => {
  //let u_mail = req.userData.u_mail;
  let { u_mail } = req.userData.data;
  console.log(u_mail);
  try {
    const products = await Cart.find({ u_mail: u_mail });
    //console.log("Data sent", products);
    console.log(products);
    res.json(products);
  } catch (error) {
    console.log("Fetch error :- ", error);
    res.send({ message: error });
  }
};

const update_product = async (req, res) => {
  let { u_mail } = req.userData.data;
  //console.log(req.body);
  const cart = {
    u_mail,
    cart: req.body.newProds,
  };

  try {
    const updateProduct = await Cart.updateOne({ u_mail }, cart);
    if (updateProduct.modifiedCount != 0) {
      console.log("Cart Updated", updateProduct);
      res.send({ update: "success" });
    } else {
      //console.log("Cart not updated");

      res.send({ update: "Record Not Found" });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  get_cart_items,
  update_product,
};
