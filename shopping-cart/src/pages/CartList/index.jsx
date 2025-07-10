import React, { useContext } from "react";
import { CartContext } from "../../Context";

const containerStyle = {
  maxWidth: "900px",
  margin: "40px auto",
  background: "#fff",
  borderRadius: "16px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
  padding: "32px 24px",
  minHeight: "300px",
};

const itemStyle = {
  display: "flex",
  alignItems: "center",
  gap: "24px",
  borderBottom: "1px solid #e5e7eb",
  padding: "18px 0",
};

const imgStyle = {
  width: "90px",
  height: "90px",
  objectFit: "cover",
  borderRadius: "8px",
  background: "#f3f4f6",
};

const titleStyle = {
  fontSize: "1.2rem",
  fontWeight: 600,
  color: "#1e293b",
  marginBottom: "6px",
};

const priceStyle = {
  fontSize: "1rem",
  color: "#2563eb",
  fontWeight: 600,
};

const qtyStyle = {
  fontSize: "1rem",
  color: "#64748b",
  margin: "0 12px",
};

const totalStyle = {
  fontSize: "1.1rem",
  color: "#16a34a",
  fontWeight: 700,
  marginLeft: "auto",
};

const removeBtnStyle = {
  marginLeft: "24px",
  padding: "8px 20px",
  background: "#ef4444",
  color: "#fff",
  border: "none",
  borderRadius: "999px",
  fontWeight: 600,
  fontSize: "1rem",
  cursor: "pointer",
  transition: "background 0.2s, transform 0.2s",
};

const removeBtnHover = {
  background: "#b91c1c",
  transform: "scale(1.05)",
};

const CartList = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [hovered, setHovered] = React.useState(null);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!cart.length) {
    return (
      <div style={containerStyle}>
        <h2 style={{ textAlign: "center", color: "#64748b" }}>
          Your cart is empty.
        </h2>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "#2563eb",
          marginBottom: 24,
        }}
      >
        Your Cart
      </h1>
      {cart.map((item) => (
        <div key={item.id} style={itemStyle}>
          <img src={item.thumbnail} alt={item.title} style={imgStyle} />
          <div style={{ flex: 1 }}>
            <div style={titleStyle}>{item.title}</div>
            <div style={priceStyle}>${item.price} each</div>
            <div style={qtyStyle}>Quantity: {item.quantity}</div>
          </div>
          <div style={totalStyle}>
            ${(item.price * item.quantity).toFixed(2)}
          </div>
          <button
            style={{
              ...removeBtnStyle,
              ...(hovered === item.id ? removeBtnHover : {}),
            }}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
      <div
        style={{
          textAlign: "right",
          marginTop: 32,
          fontSize: "1.3rem",
          fontWeight: 700,
          color: "#16a34a",
        }}
      >
        Total: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default CartList;
