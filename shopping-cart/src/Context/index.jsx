//create the context
import { createContext, useState, useEffect } from "react";

const CartContext = createContext(null);
//provide the context to the app

const CartProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total] = useState(0);
  const [totalQuantity] = useState(0);

  useEffect(() => {
    console.log("CartProvider useEffect running");
    const fetchProducts = async () => {
      console.log("fetchProducts called");
      setLoading(true);
      try {
        console.log("Fetching from API...");
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log("API response:", data);
        if (data && data.products) {
          console.log("Setting products:", data.products.length);
          setProducts(data.products);
        } else {
          console.log("No products in response");
          setError("No products found");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Add to cart function
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove from cart function
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  console.log("CartProvider render:", {
    loading,
    error,
    productsCount: products.length,
    cart,
  });

  return (
    <CartContext.Provider
      value={{
        loading,
        error,
        products,
        cart,
        total,
        totalQuantity,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

//wrap the app in the context provider

//consume the context in the app

export { CartProvider, CartContext };
