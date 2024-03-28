import { z } from "zod";

export const userSchema = z.object({
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

export type FormData = z.infer<typeof userSchema>;
