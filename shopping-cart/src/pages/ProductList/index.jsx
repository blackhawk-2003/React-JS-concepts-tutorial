import { useContext } from "react";
import { CartContext } from "../../Context";
import ProductCard from "../../Components/ProductCard";
import "./ProductList.css";

const ProductList = () => {
  const { products, loading, error } = useContext(CartContext);

  if (loading) {
    return (
      <div className="product-list-loading">
        <h2>Loading products...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-list-error">
        <h2>Error: {error}</h2>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="product-list-empty">
        <h2>No products found</h2>
      </div>
    );
  }

  return (
    <div className="product-list-page">
      <div className="product-list-container">
        <h1 className="product-list-title">Product List</h1>
        <p className="product-list-subtitle">
          Found {products.length} products
        </p>
        <div className="product-list-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
