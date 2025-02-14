const db = require("../config/db");

// DB PRODUCTS
exports.getProducts = async (req, res) => {
  try {
    const [products] = await db.query("SELECT * FROM products");
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products", error: err });
  }
};

exports.createProducts = async (req, res) => {
  const { name, price, stock, created_at } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO products (name, price, stock, created_at ) VALUES (?, ?, ?, ?)",
      [name, price, stock, created_at]
    );
    res.json({ message: "Product created", id: result.insertId });
  } catch (err) {
    res.status(500).json({ message: "Error creating product", error: err });
  }
};

exports.updateProducts = async (req, res) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;

  try {
    const query = `
      UPDATE products
      SET name = ?, price = ?, stock = ?
      WHERE id = ?
    `;

    const params = [name, price, stock, id];

    await db.query(query, params);

    res.json({ message: "Product updated in products" });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};

exports.deleteProducts = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM products WHERE id = ?", [id]);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting product", error: err });
  }
};
