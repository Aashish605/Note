import express from "express";
const router = express.Router();

import { getPdf } from "../Controllers/Pdf.Controller.js";

router.get("/",getPdf)


export default router;
