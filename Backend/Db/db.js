import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.Mongo, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                serverSelectionTimeoutMS: 5000, // Timeout for server selection
            });
            console.log("MongoDB connected");
        } else {
            console.log("MongoDB already connected");
        }
    } catch (err) {
        console.error("MongoDB connection error:", err);
        throw err;
    }
};

export default ConnectDB;
