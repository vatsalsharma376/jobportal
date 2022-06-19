import bcrypt from "bcryptjs";

import Users from "../models/Users.js";

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    } else {
      return res.status(200).json({ msg: "Login successful" });
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await Users.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new Users({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return res.status(200).json({ msg: "User created successfully" });
  } catch (err) {
    console.log(err.message);
  }
};

export const Apply = async (req, res) => {};
