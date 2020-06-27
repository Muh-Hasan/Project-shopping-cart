export default (state, action) => {
  switch (action.type) {
    case "addToCart":
      return {
        ...state,
        cart: [action.payload.product, ...state.cart]
      };
    case "remove":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    case "increase":
      state.cart[state.cart.findIndex(item => item.id === action.payload)]
        .quantity++;
      return {
        ...state,
        cart: state.cart
      };
    case "decrease":
      state.cart[state.cart.findIndex(item => item.id === action.payload)]
        .quantity--;
      return {
        ...state,
        cart: state.cart
      };
    default:
      return state;
  }
};
