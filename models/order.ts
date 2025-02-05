// mongoose
import { Schema, model, models } from "mongoose";
// uuid
import { v4 as uuidv4 } from "uuid";

const orderSchema = new Schema(
  {
    orderNumber: {
      type: String,
      unique: true,
      required: true,
      default: () => `ORD-${Date.now()}-${uuidv4().slice(0, 8)}`,
    },
    status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Completed", "Canceled", "Refunded"],
    },
    deliveryAddress: {
      type: Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
    customer: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
    paymentMethod: {
      type: String,
      required: true,
      default: "Credit Card",
      enum: ["Paypal", "Cash On Delivery", "Credit Card"],
    },
    items: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true },
        cost: { type: Number, required: true },
        discount: { type: Number, required: true },
      },
    ],
    summary: {
      totalProducts: { type: Number, required: true },
      totalPrice: { type: Number, required: true },
      totalDiscount: { type: Number, required: true },
      totalPayable: { type: Number, required: true },
      shippingCost: { type: Number, required: true, default: 0 },
      isShippingFree: { type: Boolean, required: true, default: true },
    },
  },
  { timestamps: true }
);

const OrderModel = models?.Order || model("Order", orderSchema);

export default OrderModel;
