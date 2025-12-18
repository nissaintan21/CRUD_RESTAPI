import express from "express";
import { getProducts, getProductById, insertProduct, updateProduct, deleteProduct } from "../controller/productController.js";

const router = express.Router();

// Menampilkan semua produk
router.get("/", getProducts);

// Menampilkan produk berdasarkan ID
router.get("/:id", getProductById);

// Menambahkan produk baru
router.post("/", insertProduct);

// Mengupdate produk berdasarkan ID
router.put("/:id", updateProduct);

// Menghapus produk berdasarkan ID
router.delete("/:id", deleteProduct);

export default router;
