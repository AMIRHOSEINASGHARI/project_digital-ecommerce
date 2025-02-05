// mongoose
import { Schema, model, models } from "mongoose";

const addressSchema = new Schema(
  {
    customer: { type: Schema.Types.ObjectId, ref: "Customer", required: true }, // ارجاع به کاربر
    fullName: { type: String, required: true }, // نام گیرنده
    phone: { type: String, required: true }, // شماره تماس
    street: { type: String, required: true }, // خیابان و پلاک
    city: { type: String, required: true }, // شهر
    state: { type: String, required: true }, // استان
    postalCode: { type: String, required: true }, // کد پستی
    country: { type: String, required: true, default: "Iran" }, // کشور
    isDefault: { type: Boolean, default: false }, // آیا آدرس پیش‌فرض است؟
  },
  { timestamps: true }
);

const AddressModel = models?.Address || model("Address", addressSchema);

export default AddressModel;
