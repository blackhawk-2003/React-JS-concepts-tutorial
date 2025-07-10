import { useContext } from "react";
import { CartContext } from "../../Context";
import ProductCard from "../../Components/ProductCard";

const ProductList = () => {
  const { products, loading, error } = useContext(CartContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[40vh]">
        <h2 className="text-2xl font-semibold text-gray-600">
          Loading products...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[40vh]">
        <h2 className="text-2xl font-semibold text-red-500">Error: {error}</h2>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[40vh]">
        <h2 className="text-2xl font-semibold text-gray-600">
          No products found
        </h2>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-blue-50 py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-2 text-center drop-shadow-sm">
          Product List
        </h1>
        <p className="text-lg text-gray-500 mb-8 text-center">
          Found {products.length} products
        </p>
        <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-white rounded-xl shadow-lg p-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
