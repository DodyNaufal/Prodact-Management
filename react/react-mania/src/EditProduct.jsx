import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({ name: "", price: "", stock: "" });
  const [error, setError] = useState("");

  // Fetch product data based on ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        setError("Failed to fetch product details");
        console.error(err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleUpdateProduct = async () => {
    if (product.name && product.price && product.stock) {
      try {
        const response = await fetch(`http://localhost:3000/products`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        });

        if (response.ok) {
          navigate("/");
        } else {
          setError("Failed to update product");
        }
      } catch (err) {
        setError("An error occurred while updating the product");
        console.error(err);
      }
    } else {
      setError("All fields are required");
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="product-edit">
      <h2>Edit Product</h2>
      <input
        type="text"
        placeholder="Name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
      />
      <input
        type="number"
        placeholder="Stock"
        value={product.stock}
        onChange={(e) => setProduct({ ...product, stock: e.target.value })}
      />
      <button onClick={handleUpdateProduct}>Update</button>
      <button onClick={() => navigate("/")}>Cancel</button>
    </div>
  );
};

export default EditProduct;
