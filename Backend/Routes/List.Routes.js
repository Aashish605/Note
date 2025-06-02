import express from "express";
const router = express.Router();

import { getlist } from "../Controllers/List.Controller.js";

router.get("/",getlist)

export default router;
