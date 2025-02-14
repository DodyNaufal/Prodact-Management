const db = require("../config/db");
const bcrypt = require("bcrypt");

exports.getbang_dody = async (req, res) => {
  try {
    const [bang_dody] = await db.query("SELECT * FROM bang_dody"); // Jangan kirim password ke klien
    res.json(bang_dody);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

exports.createbang_dody = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Hash password sebelum disimpan
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan ke tabel bang_dody
    const result = await db.query(
      "INSERT INTO bang_dody (nama, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    res.json({
      message: "User created in bang_dody",
      userId: result[0].insertId,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

// Perbarui pengguna di tabel bang_dody
exports.updatebang_dody = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;

  try {
    let hashedPassword;

    if (password) {
      // Hash password jika ada perubahan password
      hashedPassword = await bcrypt.hash(password, 10);
    }

    const query = `
      UPDATE bang_dody
      SET nama = ?, email = ?, ${password ? "password = ?, " : ""}role = ?
      WHERE id = ?
    `;

    const params = password
      ? [name, email, hashedPassword, role, id]
      : [name, email, role, id];

    await db.query(query, params);

    res.json({ message: "User updated in bang_dody" });
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
};

// Hapus pengguna di tabel bang_dody
exports.deletebang_dody = async (req, res) => {
  const { id } = req.params;

  try {
    await db.query("DELETE FROM bang_dody WHERE id = ?", [id]);
    res.json({ message: "User deleted from bang_dody" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};
