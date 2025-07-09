import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProducts, addProduct } from "./api";
import { useState } from "react";
import "./styles.css";

const ReactQueryDemo = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const queryClient = useQueryClient();

  // Mutation for adding a product
  const addProductMutation = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      // Invalidate and refetch products after successful addition
      queryClient.invalidateQueries({ queryKey: ["products"] });
      // Reset form
      setProduct({ name: "", description: "", price: "" });
    },
    onError: (error) => {
      console.error("Failed to add product:", error);
    },
  });

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.name && product.description && product.price) {
      addProductMutation.mutate({
        ...product,
        price: parseFloat(product.price),
      });
    }
  };

  if (isLoading) {
    return (
      <div className="react-query-container">
        <div className="loading-container">
          <h2>Loading products...</h2>
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="react-query-container">
        <div className="error-container">
          <h2>Error loading products</h2>
          <div className="error-message">
            {isError.message || "An error occurred while fetching products"}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="react-query-container">
      <div className="react-query-header">
        <h1>React Query Demo</h1>
        <p>Managing server state with TanStack Query</p>
      </div>

      {/* Product Form */}
      <div className="product-form">
        <h2 className="form-title">Add New Product</h2>

        {/* Show mutation error if any */}
        {addProductMutation.isError && (
          <div className="error-message">
            Failed to add product:{" "}
            {addProductMutation.error?.message || "Unknown error"}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter product name"
                value={product.name}
                onChange={handleChange}
                className="form-input"
                required
                disabled={addProductMutation.isPending}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Description</label>
              <input
                type="text"
                name="description"
                placeholder="Enter product description"
                value={product.description}
                onChange={handleChange}
                className="form-input"
                required
                disabled={addProductMutation.isPending}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Price</label>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                value={product.price}
                onChange={handleChange}
                className="form-input"
                min="0"
                step="0.01"
                required
                disabled={addProductMutation.isPending}
              />
            </div>
          </div>

          <button
            type="submit"
            className="form-button"
            disabled={addProductMutation.isPending}
          >
            {addProductMutation.isPending ? "Adding Product..." : "Add Product"}
          </button>
        </form>
      </div>

      {/* Products Display */}
      <div className="products-section">
        <h2 className="products-title">Products List</h2>

        {data && data.length > 0 ? (
          <div className="products-grid">
            {data.map((product) => (
              <div key={product.id} className="product-card">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-price">${product.price}</div>
                <div className="product-id">ID: {product.id}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-products">
            <h3>No products found</h3>
            <p>Add your first product using the form above!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReactQueryDemo;
