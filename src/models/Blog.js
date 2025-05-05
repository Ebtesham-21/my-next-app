import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const blogSchema = new mongoose.Schema({
  title: String,
  bImg: String,
  blogSingleImg: String, 
  description: String,
  create_at: String,
  author: String,
  authorImg: String,
  authorBio: String,
  gallery: [String],
  tags: [String],
  socials: [{ href: String, icon: String }],
  comments: [commentSchema], // Embedded comment schema
});

export default mongoose.models.Blog || mongoose.model('Blog', blogSchema);
