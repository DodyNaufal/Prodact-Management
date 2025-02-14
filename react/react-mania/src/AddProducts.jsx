import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
  });
  const navigate = useNavigate();

  const handleAddProduct = async () => {
    if (newProduct.name && newProduct.price && newProduct.stock) {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      if (response.ok) {
        navigate("/");
      }
    }
  };

  return (
    <div className="product-input">
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Name"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={newProduct.price}
        onChange={(e) =>
          setNewProduct({ ...newProduct, price: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Stock"
        value={newProduct.stock}
        onChange={(e) =>
          setNewProduct({ ...newProduct, stock: e.target.value })
        }
      />
      <button onClick={handleAddProduct}>Add</button>
    </div>
  );
};

export default AddProduct;
