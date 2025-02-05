// mongoose
import { Schema, model, models } from "mongoose";

const cartSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
      unique: true,
    },
    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
          default: "",
        },
        quantity: { type: Number, required: true, default: 0 },
        price: { type: Number, required: true, default: 0 },
        discount: { type: Number, required: true, default: 0 },
      },
    ],
    totalPrice: { type: Number, required: true, default: 0 },
    totalDiscount: { type: Number, required: true, default: 0 },
    totalPayable: { type: Number, required: true, default: 0 },
    checkoutStatus: {
      type: String,
      enum: ["Pending", "Completed"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const CartModel = models?.Cart || model("Cart", cartSchema);

export default CartModel;
