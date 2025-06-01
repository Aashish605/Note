import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
async function ConnectDB() {
    try {
        await mongoose.connect(process.env.Mongo);
        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB connection error", err);
        throw err; 
    }
}
export default ConnectDB;
