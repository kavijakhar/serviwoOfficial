// getting-started.js
const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  authorEmail: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    require: true,
    default:'Unkown'
  },
  description: {
    type: String,
    require: true,
  },
  excerpt: {
    type: String,
    require: true,
    default:''
  },
  content: {
    type: String,
    required: true,
    default: "" // Empty buffer as the default value
  },
  slug: {
    type: String,
    required: true,
    unique:true // Empty buffer as the default value
  },
  image: {
    type: String,
    required: true,
    default:"" // Empty buffer as the default value
  },
  category: {
    type: String,
    require: true,
    default:'default'
  },
},{timestamps:true});
mongoose.models={}
export default mongoose.models.Blog || mongoose.model("Blog",blogSchema)
