import React, { memo } from "react";

const ProductList = memo(({ products, selectedProduct, onProductClick }) => {
    
  return (
    <div style={{ flex: 1, borderRight: "1px solid gray", padding: "10px", height: '400px', overflow: 'auto' }}>
      <h2>List product</h2>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            padding: "10px",
            border:
              selectedProduct?.id === product.id
                ? "2px solid red"
                : "1px solid gray",
            marginBottom: "5px",
            cursor: "pointer",
          }}
          onClick={() => onProductClick(product)}
        >
          <div>
            #{product.id} {product.name} - {product.price} {product.currency}
          </div>
        </div>
      ))}
    </div>
  );
});

export default ProductList;
