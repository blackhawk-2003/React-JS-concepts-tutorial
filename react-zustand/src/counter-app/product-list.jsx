import { useProduct } from "../store/useCounter";
import { useEffect } from "react";
import "./ProductList.css";

const ProductList = () => {
  const product = useProduct((state) => state.product);
  const fetchProduct = useProduct((state) => state.fetchProduct);
  const loading = useProduct((state) => state.loading);
  const error = useProduct((state) => state.error);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  // Function to render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push("★");
    }
    if (hasHalfStar) {
      stars.push("☆");
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push("☆");
    }
    return stars.join("");
  };

  // Function to format price
  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  // Function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  if (loading) {
    return (
      <div className="product-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <div className="loading-text">Loading amazing products...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-container">
        <div className="error-container">
          <div className="error-icon">⚠️</div>
          <div className="error-text">Oops! Something went wrong</div>
          <div className="error-message">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-container">
      <div className="product-header">
        <h2>Amazing Products</h2>
        <p>Discover our curated collection of premium items</p>
      </div>

      {product.length > 0 ? (
        <div className="product-grid">
          {product.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <div className="product-category">{product.category}</div>
                <h3 className="product-title">
                  {truncateText(product.title, 60)}
                </h3>
                <div className="product-price">
                  {formatPrice(product.price)}
                </div>
                <div className="product-rating">
                  <span className="rating-stars">
                    {renderStars(product.rating.rate)}
                  </span>
                  <span className="rating-count">
                    ({product.rating.count} reviews)
                  </span>
                </div>
                <p className="product-description">
                  {truncateText(product.description, 120)}
                </p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-container">
          <div className="empty-icon">📦</div>
          <div className="empty-text">No products found</div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
