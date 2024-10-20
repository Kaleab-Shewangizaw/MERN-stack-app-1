import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to mongoDB", error);
    process.exit(1); // process 1 code means failure and 0 means success
  }
};
