import { Link } from "react-router-dom";
import { useState } from "react";

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "15px",
  backgroundColor: "white",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  transition: "transform 0.2s ease",
  position: "relative",
  overflow: "hidden",
};

const imgStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "4px",
  marginBottom: "10px",
};

const titleStyle = {
  margin: "0 0 8px 0",
  fontSize: "16px",
  fontWeight: "bold",
};

const priceStyle = {
  margin: 0,
  fontSize: "18px",
  fontWeight: "bold",
  color: "#007bff",
};

const buttonBase = {
  position: "absolute",
  left: "50%",
  bottom: "24px",
  transform: "translateX(-50%) translateY(20px)",
  opacity: 0,
  background: "#2563eb",
  color: "#fff",
  padding: "10px 28px",
  borderRadius: "999px",
  fontWeight: 600,
  fontSize: "16px",
  border: "none",
  boxShadow: "0 4px 16px rgba(37,99,235,0.15)",
  cursor: "pointer",
  transition: "opacity 0.3s, transform 0.3s, background 0.2s, box-shadow 0.2s",
  zIndex: 2,
  pointerEvents: "auto",
};

const buttonVisible = {
  opacity: 1,
  transform: "translateX(-50%) translateY(0)",
};

const buttonHover = {
  background: "#1741a6",
  boxShadow: "0 8px 24px rgba(37,99,235,0.25)",
  transform: "translateX(-50%) translateY(-4px)",
};

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <div
      style={{ ...cardStyle, transform: hovered ? "scale(1.04)" : "scale(1)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setButtonHovered(false);
      }}
    >
      <img src={product.thumbnail} alt={product.title} style={imgStyle} />
      <h3 style={titleStyle}>{product.title}</h3>
      <p style={priceStyle}>${product.price}</p>
      <Link
        to={`/product/${product.id}`}
        style={{
          ...buttonBase,
          ...(hovered ? buttonVisible : {}),
          ...(buttonHovered ? buttonHover : {}),
        }}
        onMouseEnter={() => setButtonHovered(true)}
        onMouseLeave={() => setButtonHovered(false)}
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
