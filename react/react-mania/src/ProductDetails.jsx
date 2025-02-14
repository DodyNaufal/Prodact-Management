import { useState, useEffect } from "react";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [viewProduct, setViewProduct] = useState(null);

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-view-container">
      <h2>Product Details</h2>
      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-item"
            onClick={() => setViewProduct(product)}
          >
            {product.name}
          </div>
        ))}
      </div>

      {/* Modal */}
      {viewProduct && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{viewProduct.name}</h3>
            <p>Price: ${viewProduct.price}</p>
            <p>Stock: {viewProduct.stock}</p>
            <button onClick={() => setViewProduct(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
