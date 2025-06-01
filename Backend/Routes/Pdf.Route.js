import express from "express";
const router = express.Router();

import { getPdf } from "../Controllers/Pdf.Controller.js";

router.get("/pdf",getPdf)


export default router;
