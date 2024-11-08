import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login user
const loginUSer = async (req, res) => {};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//register user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;

  try {
    //checking is user already exixt
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exixts" });
    }

    //validating the email format and strong passwaord
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter a valid email" });
    }

    // validating the password
    if (password.length < 8) {
      return res.json({ success: false, message: "Enter the strong password" });
    }

    // hasing the user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

export { loginUSer, registerUser };
