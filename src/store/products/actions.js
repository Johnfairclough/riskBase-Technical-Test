export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const SET_RATING = "SET_RATING";

export const loadProducts = () => ({
  type: LOAD_PRODUCTS,
  payload: [
    {
      id: 1,
      title: "Nike Trainers",
      description: "Some Nike trainers you might like to buy",
      rating: 1,
    },
    {
      id: 2,
      title: "Addidas Trainers",
      description: "Some Addidas trainers you might like to buy",
      rating: 2,
    },
    {
      id: 3,
      title: "Puma Trainers",
      description: "Some Puma trainers you might like to buy",
      rating: 3,
    },
    {
      id: 4,
      title: "New Balance Trainers",
      description: "Some New Balance trainers you might like to buy",
      rating: 4,
    }
  ]
});

export const setRating = (rating, productId) => ({
  type: SET_RATING,
  payload: { rating, productId }
})
