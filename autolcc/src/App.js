import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ProductList from "./product/ProductList";
import ProductDetails from "./product/ProductDetails";

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);


  useEffect(() => {
    axios
      .get("https://6749e5aa868020296633047a.mockapi.io/api/v1/product")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Помилка отримання даних:", error));
  }, []);

  const handleProductClick = useCallback(
    (product) => {
      setSelectedProduct(product);
    },
    []
  );


  const handleNextProduct = useCallback(() => {
    if (!selectedProduct) return;
    const currentIndex = products.findIndex((p) => p.id === selectedProduct.id);
    const nextIndex = (currentIndex + 1) % products.length;
    setSelectedProduct(products[nextIndex]);
  }, [selectedProduct, products]);

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <ProductList
        products={products}
        selectedProduct={selectedProduct}
        onProductClick={handleProductClick}
      />
      <ProductDetails
        product={selectedProduct}
        onNextProduct={handleNextProduct}
      />
    </div>
  );
};

export default App;
