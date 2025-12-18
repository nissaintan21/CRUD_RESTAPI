import express from "express";
import { 
    getCategories, 
    getCategoryById, 
    insertCategory, 
    updateCategory, 
    deleteCategory 
} from "../controller/categoryController.js";

const router = express.Router();

router.get("/", getCategories);

router.get("/:id", getCategoryById);

router.post("/", insertCategory);

router.put("/:id", updateCategory);

router.delete("/:id", deleteCategory);

export default router;
