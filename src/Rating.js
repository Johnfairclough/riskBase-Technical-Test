import React from "react";
import { useDispatch } from "react-redux";
import { setRating } from "./store/products/actions";

function Product({ rating, maxRating = 5, productId }) {

  const dispatch = useDispatch();

  const onSetRating = (newRating) => {
    dispatch(setRating(newRating, productId));
  }

  const generateRating = () => {
    let finalRating = [];
    for (let x = 0; x < maxRating; x += 1) {
      finalRating.push(
        <div 
          onClick={() => onSetRating(x + 1)}
          className={`rating-pip ${x + 1 <= rating ? "active" : ""}`} />
      );
    }
    return finalRating;
 };

  return <div class="rating"><h3>Rating:</h3>{generateRating()}</div>;
};

export default Product;
