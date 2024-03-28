import { z } from "zod";

export const signUpSchema = z.object({
  username: z
    .string()
    .min(2, "username cannot be empty")
    .max(20, "username cannot be too long")
    .trim(),
  email: z
    .string()
    .email("Invalid email format")
    .trim()
    .min(1, "Email is required"),
  password: z.string().min(6, "minimum length of 6 characters"),
});

export const signInSchema = z.object({
  email: z
    .string()
    .email("Invalid email format")
    .min(1, "Email is required")
    .trim(),
  password: z.string().trim().min(1, "password is required"),
});

export type SignUpData = z.infer<typeof signUpSchema>;
export type SignInData = z.infer<typeof signInSchema>;
