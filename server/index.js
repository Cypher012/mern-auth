import express from "express";
import dotenv from "dotenv";
import connectDB from "./connectDB.js";
import userRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();

const port = process.env.PORT;
const URI = process.env.URI;

connectDB(URI);

app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
