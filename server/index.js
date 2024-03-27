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

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
