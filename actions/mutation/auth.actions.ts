"use server";

// lib
import connectDB from "@/lib/connectDB";
import { hashPassword } from "@/lib/functions";
// types
import { RegisterUserProps } from "@/types";
// models
import { CustomerModel } from "@/models";

export const registerUser = async (data: RegisterUserProps) => {
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

    await CustomerModel.create({
      ...data,
      password: hashedPassword,
    });

    return { message: "User created!" };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
