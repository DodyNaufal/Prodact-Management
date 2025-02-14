import { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null); // Produk yang sedang diedit
  const [editedName, setEditedName] = useState(""); // Nama produk yang diedit
  const [editedPrice, setEditedPrice] = useState(""); // Harga produk yang diedit
  const [editedStock, setEditedStock] = useState(""); // Stok produk yang diedit

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDeleteProduct = async (id) => {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      fetchProducts();
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product); // Produk yang akan diedit
    setEditedName(product.name); // Isi nama produk
    setEditedPrice(product.price); // Isi harga produk
    setEditedStock(product.stock); // Isi stok produk
  };

  const handleUpdateProduct = async () => {
    const response = await fetch(
      `http://localhost:3000/products/${editingProduct.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: editedName,
          price: editedPrice,
          stock: editedStock,
        }),
      }
    );
    if (response.ok) {
      fetchProducts();
      setEditingProduct(null); // Reset setelah berhasil
      setEditedName("");
      setEditedPrice("");
      setEditedStock("");
    }
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <span>{product.name}</span>
          <button onClick={() => handleEditProduct(product)}>Edit</button>
          <button onClick={() => handleDeleteProduct(product.id)}>
            Delete
          </button>
        </div>
      ))}

      {editingProduct && (
        <div className="edit-form">
          <h3>Edit Product</h3>
          <input
            type="text"
            placeholder="Product Name"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            value={editedPrice}
            onChange={(e) => setEditedPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Stock"
            value={editedStock}
            onChange={(e) => setEditedStock(e.target.value)}
          />
          <button onClick={handleUpdateProduct}>Update</button>
          <button onClick={() => setEditingProduct(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Home;
