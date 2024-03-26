import express from "express";
import dotenv from "dotenv";
import connectDB from "./connectDB.js";

dotenv.config();

const app = express();

const port = process.env.PORT;
const URI = process.env.URI;

connectDB(URI);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
