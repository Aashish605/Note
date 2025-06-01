import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import ConnectDB from './Db/db.js';
import list from "./Routes/List.Routes.js";
import Pdf from "./Routes/Pdf.Route.js";

const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        "https://note-frontend-fawn.vercel.app",
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
    exposedHeaders: ["Set-Cookie"]
  })
);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World! Backend is running.');
});

app.use("/", list);
app.use("/", Pdf);


async function startServer() {
  try {
    await ConnectDB();
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("error during starting server", error.message);
  }
}
startServer();
