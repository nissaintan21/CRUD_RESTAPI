import db from "../config/db.js"; 

// Menampilkan semua kategori
export const getCategories = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM categories");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM categories WHERE id = ?", [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: "Kategori tidak ditemukan" });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const insertCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const [result] = await db.execute(
      "INSERT INTO categories (name) VALUES (?)",
      [name]
    );
    const [rows] = await db.execute("SELECT * FROM categories WHERE id = ?", [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const [result] = await db.execute(
      "UPDATE categories SET name = ? WHERE id = ?",
      [name, req.params.id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ message: "Kategori tidak ditemukan" });
    const [rows] = await db.execute("SELECT * FROM categories WHERE id = ?", [req.params.id]);
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const [result] = await db.execute("DELETE FROM categories WHERE id = ?", [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: "Kategori tidak ditemukan" });
    res.json({ message: "Kategori berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
