// mongoos
import { Schema, models, model } from "mongoose";

const customerSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    displayName: { type: String, default: "" },
    password: { type: String, required: false, default: "" },
    avatar: { type: String, default: "" },
    phoneNumber: { type: String, default: "" },
    addresses: [{ type: Schema.Types.ObjectId, ref: "Address", default: [] }],
    orders: [{ type: Schema.Types.ObjectId, ref: "Order", default: [] }],
    likes: [{ type: Schema.Types.ObjectId, ref: "Like", default: [] }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment", default: [] }],
    cart: {
      items: [
        {
          productId: { type: Schema.Types.ObjectId, ref: "Product" },
          quantity: { type: Number, default: 0 },
        },
      ],
      selectedItems: [{ type: Schema.Types.ObjectId, ref: "Product" }],
      totalProductsCount: { type: Number, default: 0 },
      checkoutStatus: {
        type: String,
        enum: ["Pending", "Completed"],
        default: "Pending",
      },
    },
  },
  { timestamps: true }
);

const CustomerModel = models?.Customer || model("Customer", customerSchema);

export default CustomerModel;
