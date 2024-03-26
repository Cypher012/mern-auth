import mongoose from "mongoose";

const connectDB = async (URI) => {
  try {
    const connect = await mongoose.connect(URI);
    console.log("Mongoose Connected Successfully");
  } catch (error) {
    console.log("Error connecting to Mongoose", error);
  }
};

export default connectDB;
