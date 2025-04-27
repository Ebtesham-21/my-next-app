import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: String,
    description: String,
    author: String,
    create_at: String,
    comment: String,
    screens: String,
    blogSingleImg: String,
    thumb: String,
}, { timestamps: true });

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);