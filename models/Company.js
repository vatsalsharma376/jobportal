import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  // job post schema
  title: String,
  description: String,
  salary: String,
  location: String,
  skills: [String],
  applied: {
    name: [String],
  },
});

const companySchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const Company = mongoose.model("company", companySchema);

export default Company;
