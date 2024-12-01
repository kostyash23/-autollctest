import React, { memo } from "react";

const ProductDetails = memo(({ product, onNextProduct }) => {
   
    
  return (
    <div style={{ flex: 2, padding: "10px" }}>
      <h2>Details</h2>
      {product ? (
        <>
          <h3>
            #{product.id} {product.name} - {product.price} {product.currency}
          </h3>
          <div  style={{
                display: "flex",
                gap: "30px",
               }}>
            <img
                src={product.photo}
                alt={product.name}
                style={{
                width: "300px",
                maxHeight: "300px",
                objectFit: "cover",
                }}
            />
            <p>{product.description}</p>
          </div>
          
          <button style={{
                margin: "10px auto",
                gap: "30px",
                display: "block"
               }} onClick={onNextProduct}>Next product</button>
        </>
      ) : (
        <p>Select an item to view details.</p>
      )}
    </div>
  );
});

export default ProductDetails;
