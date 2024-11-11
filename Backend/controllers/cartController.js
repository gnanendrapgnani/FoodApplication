import userModel from "../models/userModel.js";

// add items to user Cart
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.body.userID });
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemID]) {
      cartData[req.body.itemID] = 1;
    } else {
      cartData[req.body.itemID] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userID, { cartData });
    res.json({ success: true, message: "Add to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove items from the user Cart
const removeFromCart = async (req, res) => {};

// fetch user cart data
const getCart = async (req, res) => {};

export { addToCart, removeFromCart, getCart };
