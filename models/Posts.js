import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  // job post schema
  title: String,
  companyId: String,
  description: String,
  salary: String,
  location: String,
  skills: [String],
  applied: {
    name: [String],
  },
});
const Post = mongoose.model("post", postSchema);
export default Post;
