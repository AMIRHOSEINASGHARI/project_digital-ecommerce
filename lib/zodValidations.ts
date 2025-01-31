import { z } from "zod";
import regexes from "./regexes";

export const RegisterFormSchema = z.object({
  name: z
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
