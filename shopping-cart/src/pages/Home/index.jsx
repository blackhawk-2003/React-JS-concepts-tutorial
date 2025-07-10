import React from "react";

const Home = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "60vh",
    }}
  >
    <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
      Welcome to Shopping Cart
    </h1>
    <p style={{ fontSize: "1.2rem", color: "#555" }}>
      Browse our products and add them to your cart!
    </p>
  </div>
);

export default Home;
