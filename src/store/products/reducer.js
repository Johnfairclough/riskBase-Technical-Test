import { LOAD_PRODUCTS, SET_RATING } from "./actions";

export const products = (
  state = {
    list: []
  },
  action
) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { list: action.payload };
    case SET_RATING: 
      const list = state.list.map(product => {
        if (product.id === action.payload.productId) {
          product.rating = action.payload.rating;
        }
        return product;
      });

      return { list };
    default:
      return state;
  }

};


