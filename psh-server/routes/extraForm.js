import express from "express";
import { createExtraForm } from "../controllers/extraForm.js";

import uploader from "../middleware/uploader.js";

const router = express.Router();

router.post("/", uploader, createExtraForm);

export default router;
