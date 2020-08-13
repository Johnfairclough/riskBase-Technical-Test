import React from "react";
import Rating from "./Rating";

function Product({ product }) {
  return (
    <div className="product">
      <h2>{product.title}</h2>
      <p>{product.description}</p> 
      <Rating className="Pip" rating={product.rating} productId={product.id}/>
      <hr />
      </div>
  );
}

export default Product;
