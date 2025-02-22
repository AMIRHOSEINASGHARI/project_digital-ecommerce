// mongoose
import { Schema, model, models } from "mongoose";

const likeSchema = new Schema({
  type: { type: String, required: true, default: "product" },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  blog: { type: Schema.Types.ObjectId, ref: "Blog" },
});

const LikeModel = models?.Like || model("Like", likeSchema);

export default LikeModel;
