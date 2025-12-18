import db from "../config/db.js"; 

export const getProducts = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM products");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM products WHERE id = ?", [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: "Produk tidak ditemukan" });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const insertProduct = async (req, res) => {
  const { name, price, category_id } = req.body;

  if (!name || price === undefined || !category_id) {
    return res.status(400).json({ message: "Name, price, dan category_id wajib diisi" });
  }

  try {
    const [result] = await db.execute(
      "INSERT INTO products (name, price, category_id) VALUES (?, ?, ?)",
      [name, price, category_id]
    );
  
    const [rows] = await db.execute("SELECT * FROM products WHERE id = ?", [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { name, price, category_id } = req.body;

  if (!name || price === undefined || !category_id) {
    return res.status(400).json({ message: "Name, price, dan category_id wajib diisi" });
  }

  try {
    const [result] = await db.execute(
      "UPDATE products SET name = ?, price = ?, category_id = ? WHERE id = ?",
      [name, price, category_id, req.params.id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ message: "Produk tidak ditemukan" });
    const [rows] = await db.execute("SELECT * FROM products WHERE id = ?", [req.params.id]);
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const [result] = await db.execute("DELETE FROM products WHERE id = ?", [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: "Produk tidak ditemukan" });
    res.json({ message: "Produk berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
