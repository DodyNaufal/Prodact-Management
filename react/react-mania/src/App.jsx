import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import AddProducts from "./AddProducts";
// import EditProduct from "./EditProduct";
import ProductDetails from "./ProductDetails";
import "./App.css";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/add-product">Add Product</Link>
    <Link to="/product-details">Product Details</Link>
  </nav>
);

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <h1>Product Management</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddProducts />} />
          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
};
// yuhu
export default App;

