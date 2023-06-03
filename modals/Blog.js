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
    require: true,
    default:''
  },
},{timestamps:true});
// mongoose.models={}
export default mongoose.models.Blog || mongoose.model("Blog",blogSchema)
// export default mongoose.model("User",UserSchema)