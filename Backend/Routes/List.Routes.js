import express from "express";
import { getlist } from "../Controllers/List.Controller.js";

const router = express.Router();

router.get("/", getlist);

export default router;
