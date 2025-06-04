import express from "express";
import { getPdf, postPdf } from "../Controllers/Pdf.Controller.js";

const router = express.Router();

router.get("/", getPdf);
router.post("/", postPdf);

export default router;
