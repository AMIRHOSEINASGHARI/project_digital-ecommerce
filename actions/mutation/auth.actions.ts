"use server";

// lib
import connectDB from "@/lib/connectDB";
import { hashPassword } from "@/lib/functions";
// types
import { RegisterUserProps } from "@/types";
// models
import { CartModel, CustomerModel } from "@/models";

const registerUser = async (data: RegisterUserProps) => {
  try {
    await connectDB();

    const { email, password } = data;

    const customer = await CustomerModel.findOne({ email });
    if (customer && customer?.password)
      return { error: "User already exists!" };

    const hashedPassword = await hashPassword(password);

    if (customer && !customer?.password) {
      customer.password = hashedPassword;
      await customer.save();

      return { message: "User updated!" };
    }

    const newCustomer = await CustomerModel.create({
      ...data,
      password: hashedPassword,
    });
    const newCart = await CartModel.create({
      customer: newCustomer._id,
    });
    newCustomer.cart = newCart._id;
    await newCustomer.save();

    return { message: "User created!" };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { registerUser };
