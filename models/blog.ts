// mongoose
import { Schema, model, models } from "mongoose";

const blogSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  cover: { type: String, required: true },
  tags: { type: [String], default: [], required: true },
  likes: [{ type: Schema.Types.ObjectId, ref: "Like", default: [] }],
  published: { type: Boolean, default: true },
  enableComments: { type: Boolean, default: true },
  metaTitle: { type: String, required: true },
  metaDescription: { type: String, required: true },
  metaKeywords: { type: [String], default: [], required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: "Admin" },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutabale: true,
  },
});

const BlogModel = models?.Blog || model("Blog", blogSchema);

export default BlogModel;
