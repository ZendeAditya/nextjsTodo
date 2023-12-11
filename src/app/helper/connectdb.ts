import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://adityazende6710:0l2tYuD1A1C3Al04@nextjstodo.mfwxtjq.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

export default connectDB;

// adityazende6710.
// 0l2tYuD1A1C3Al04 