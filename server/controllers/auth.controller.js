import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 12);
  try {
    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
    }).save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(501).json({ message: error.message });
  }
};
