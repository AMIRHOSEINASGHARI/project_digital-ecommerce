import { z } from "zod";
import regexes from "./regexes";

export const RegisterFormSchema = z.object({
  displayName: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be at most 50 characters long")
    .regex(regexes.name, "Name can only contain alphabets and spaces")
    .trim(),
  email: z
    .string()
    .email("Invalid email address")
    .min(5, "Email must be at least 5 characters long")
    .max(100, "Email must be at most 100 characters long")
    .trim(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(50, "Password must be at most 50 characters long")
    .regex(
      regexes.password,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

export const LoginFormSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .min(5, "Email must be at least 5 characters long")
    .max(100, "Email must be at most 100 characters long")
    .trim(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(50, "Password must be at most 50 characters long")
    .regex(
      regexes.password,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

export const AddressFormSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name must be at least 1 characters long")
    .max(100, "Full name must be at most 100 characters long")
    .trim(),
  phone: z
    .string()
    .min(11, "Phone number must be 11 characters")
    .max(11, "Phone number must be 11 characters")
    .regex(regexes.phoneNumber, "Phone number is not valid")
    .trim(),
  street: z
    .string()
    .min(1, "Street must be at least 1 characters long")
    .max(100, "Street must be at most 100 characters long")
    .trim(),
  city: z
    .string()
    .min(1, "City must be at least 1 characters long")
    .max(100, "City must be at most 100 characters long")
    .trim(),
  state: z
    .string()
    .min(1, "State must be at least 1 characters long")
    .max(100, "State must be at most 100 characters long")
    .trim(),
  country: z
    .string()
    .min(1, "Country must be at least 1 characters long")
    .max(100, "Country must be at most 100 characters long")
    .trim(),
  postalCode: z
    .string()
    .min(10, "Postal code must be 10 characters")
    .max(10, "Postal code must be 10 characters")
    .regex(/^[0-9]/, "Postal code is not valid")
    .trim(),
  isDefault: z.boolean(),
});
