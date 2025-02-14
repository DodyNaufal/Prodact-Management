const db = require("../config/db");

exports.getUsers = async (req, res) => {
  try {
    const [users] = await db.query("SELECT * FROM users");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO users (nama, email, password) VALUES (?, ?, ?)",
      [name, email, password]
    );
    res.json({ message: "User created", userId: result[0].insertId });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;
  try {
    await db.query(
      "UPDATE users SET nama = ?, email = ?, password = ?, role = ? WHERE id = ?",
      [name, email, password, role, id]
    );
    res.json({ message: "User updated" });
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM users WHERE id = ?", [id]);
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};

// // DB PRODUCTS
// exports.getProducts = async (req, res) => {
//   try {
//     const [products] = await db.query("SELECT * FROM products");
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching products", error: err });
//   }
// };

// exports.createProduct = (req, res) => {
//   const { name, description, price } = req.body;
//   db.query(
//     "INSERT INTO products (id, name, price, stock, created_at) VALUES (?, ?, ?, ?, ?)",
//     [id, name, price, stock, created_at],
//     (err, result) => {
//       if (err) {
//         res.status(500).json({ message: "Error creating product", error: err });
//       } else {
//         res.json({ message: "Product created", id: result.insertId });
//       }
//     }
//   );
// };

// // exports.createProduct = async (req, res) => {
// //   const { name, description, price } = req.body;
// //   try {
// //     const [result] = await db.query(
// //       "INSERT INTO products (name, description, price) VALUES (?, ?, ?)",
// //       [name, description, price]
// //     );
// //     res.json({ message: "Product created", id: result.insertId });
// //   } catch (err) {
// //     res.status(500).json({ message: "Error creating product", error: err });
// //   }
// // };

// exports.updateProduct = async (req, res) => {
//   const { id } = req.params;
//   const { name, description, price } = req.body;
//   try {
//     await db.query(
//       "UPDATE products SET name = ?, description = ?, price = ? WHERE id = ?",
//       [name, description, price, id]
//     );
//     res.json({ message: "Product updated" });
//   } catch (err) {
//     res.status(500).json({ message: "Error updating product", error: err });
//   }
// };

// exports.deleteProduct = async (req, res) => {
//   const { id } = req.params;
//   try {
//     await db.query("DELETE FROM products WHERE id = ?", [id]);
//     res.json({ message: "Product deleted" });
//   } catch (err) {
//     res.status(500).json({ message: "Error deleting product", error: err });
//   }
// };
