import express, { json } from "express";
import dotenv from "dotenv";
import connectDB from "./connectDB.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT;
const URI = process.env.URI;

connectDB(URI);

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
