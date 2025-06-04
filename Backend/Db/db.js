import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.Mongo, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                serverSelectionTimeoutMS: 30000,
                connectTimeoutMS: 30000,
            });
            console.log("MongoDB connected");
        } else {
            console.log("MongoDB already connected");
        }
    } catch (err) {
        console.error("MongoDB connection error:", err.message);
        process.exit(1); // Exit process on failure
    }
};

export default ConnectDB;
