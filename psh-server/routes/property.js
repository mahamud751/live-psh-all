import express from "express";
import {
  CreatePropertys,
  deletePropertys,
  getPropertys,
  getRecommendedPropertys,
  getSinglePropertys,
  updatePropertys,
} from "../controllers/property.js";

const router = express.Router();

router.post("/", CreatePropertys);
router.get("/", getPropertys);
router.get("/:id", getSinglePropertys);
router.delete("/:id", deletePropertys);
router.get("/:id", updatePropertys);
router.get("/properties/recommended", getRecommendedPropertys);

export default router;
