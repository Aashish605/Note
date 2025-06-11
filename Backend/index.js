import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDB from './Db/db.js';
import listRoutes from "./Routes/List.Routes.js";
import pdfRoutes from "./Routes/Pdf.Route.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        "https://noteflix.in/",
        "https://note-frontend-nu.vercel.app",
        "http://localhost:5173"
      ];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Set-Cookie"],
    exposedHeaders: ["Set-Cookie"],
}));

app.use(express.json());

app.use("/list", listRoutes);
app.use("/pdf", pdfRoutes);

app.use((err, req, res, next) => {
    console.error("Unhandled error:", err.message);
    res.status(500).json({ error: "Internal server error." });
});

const startServer = async () => {
    try {
        await ConnectDB();
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Error starting server:", error.message);
        process.exit(1);
    }
};

startServer();

export default app;