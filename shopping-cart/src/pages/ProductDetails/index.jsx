import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../Context";

const containerStyle = {
  maxWidth: "900px",
  margin: "40px auto",
  background: "#fff",
  borderRadius: "16px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
  padding: "32px 24px",
  display: "flex",
  gap: "32px",
  alignItems: "flex-start",
  minHeight: "400px",
};

const imgStyle = {
  width: "340px",
  height: "340px",
  objectFit: "cover",
  borderRadius: "12px",
  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
  background: "#f3f4f6",
};

const detailsStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const titleStyle = {
  fontSize: "2.2rem",
  fontWeight: 700,
  marginBottom: "12px",
  color: "#1e293b",
};

const priceStyle = {
  fontSize: "1.5rem",
  fontWeight: 600,
  color: "#2563eb",
  marginBottom: "16px",
};

const descStyle = {
  fontSize: "1.1rem",
  color: "#475569",
  marginBottom: "18px",
  lineHeight: 1.6,
};

const badgeStyle = {
  display: "inline-block",
  background: "#e0e7ff",
  color: "#3730a3",
  borderRadius: "8px",
  padding: "4px 14px",
  fontSize: "0.95rem",
  fontWeight: 500,
  marginRight: "10px",
  marginBottom: "8px",
};

const buttonStyle = {
  marginTop: "28px",
  padding: "14px 38px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "999px",
  fontWeight: 700,
  fontSize: "1.1rem",
  boxShadow: "0 4px 16px rgba(37,99,235,0.15)",
  cursor: "pointer",
  transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
  outline: "none",
  letterSpacing: "0.5px",
};

const buttonHoverStyle = {
  background: "#1741a6",
  transform: "translateY(-2px) scale(1.03)",
  boxShadow: "0 8px 24px rgba(37,99,235,0.25)",
};

const addedStyle = {
  background: "#22c55e",
  color: "#fff",
};

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [buttonHovered, setButtonHovered] = useState(false);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: 80 }}>
        <h2 style={{ color: "#64748b" }}>Loading product details...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: 80 }}>
        <h2 style={{ color: "#ef4444" }}>Error: {error}</h2>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div style={containerStyle}>
      <img src={product.thumbnail} alt={product.title} style={imgStyle} />
      <div style={detailsStyle}>
        <h1 style={titleStyle}>{product.title}</h1>
        <div style={priceStyle}>${product.price}</div>
        <div style={descStyle}>{product.description}</div>
        <div>
          <span style={badgeStyle}>Brand: {product.brand}</span>
          <span style={badgeStyle}>Category: {product.category}</span>
          <span style={badgeStyle}>Rating: {product.rating} ⭐</span>
          <span style={badgeStyle}>Stock: {product.stock}</span>
        </div>
        <button
          style={{
            ...buttonStyle,
            ...(buttonHovered ? buttonHoverStyle : {}),
            ...(added ? addedStyle : {}),
          }}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
          onClick={handleAddToCart}
          disabled={added}
        >
          {added ? "Added!" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
