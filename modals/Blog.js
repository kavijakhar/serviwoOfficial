const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  authorEmail: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
    default: 'Unknown'
  },
  timeReading: {
    type: Number, // Fix the type to `Number`
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    default: ""
  },
  excerpt: {
    type: String,
    required: true,
    default: ''
  },
  content: {
    type: String,
    required: true,
    default: ""
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true,
    default: 'default'
  },
  tags: {
    type: [String],
    default: []
  },
}, { timestamps: true });

mongoose.models = {}
export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);
