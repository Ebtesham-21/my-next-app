import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    image: String,
    createdAt: { type: Date, default: Date.now},
    comments: [{
        name: String,
        email: String,
        comment: String,
        createdAt: { type: Date, default: Date.now }
      }]
    });

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);