import express from "express";
const router = express.Router();

import { getPdf } from "../Controllers/Pdf.Controller.js";
import {postPdf} from "../Controllers/Pdf.Controller.js"

router.get("/",getPdf)
router.post('/',postPdf)


export default router;
