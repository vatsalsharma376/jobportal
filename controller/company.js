import bcrypt from "bcryptjs";

import Company from "../models/Company.js";

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Company.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    } else {
      return res.status(200).json({ msg: "Login successful", id: user._id });
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await Company.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new Company({
      name,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    return res
      .status(200)
      .json({ msg: "User created successfully", id: savedUser._id });
  } catch (err) {
    console.log(err.message);
  }
};

export const Apply = async (req, res) => {
  // apply to the job
  try {
    const { name, jobId, companyId } = req.body;
    const company = await Company.findById(companyId);
    const job = company.posts.find((job) => job._id.toString() === jobId);
    const applied = job.applied;
    applied.push(name);
    await job.save();
    return res.status(200).json({ msg: "Applied successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ msg: err.message });
  }
};

export const NewPost = async (req, res) => {
  try {
    const { title, description, salary, location, skills } = req.body;
    const newPost = {
      title,
      description,
      salary,
      location,
      skills,
    };

    return res.status(200).json({ msg: "Post created successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ msg: err.message });
  }
};
