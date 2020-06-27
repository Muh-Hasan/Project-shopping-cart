import React, { createContext, useReducer } from "react";
import Appreducer from "./appreducer";

const productstate = {
  products: [
    { id: 1, name: "Product - 1", price: 30.0, quantity: 0 },
    { id: 2, name: "Product - 2", price: 40.0, quantity: 0 },
    { id: 3, name: "Product - 3", price: 10.0, quantity: 0 },
    { id: 4, name: "Product - 4", price: 20.0, quantity: 0 },
    { id: 5, name: "Product - 5", price: 50.0, quantity: 0 }
  ],
  cart: []
};

export const Globalcontext = createContext(productstate);

export const Globalprovider = ({ children }) => {
  const [state, dispatch] = useReducer(Appreducer, productstate);

  function addToCart(product) {
    dispatch({
      type: "addToCart",
      payload: product
    });
  }

  function removeCart(id) {
    dispatch({
      type: "remove",
      payload: id
    });
  }

  function increase(id) {
    dispatch({
      type: "increase",
      payload: id
    });
  }

  function decrease(id) {
    dispatch({
      type: "decrease",
      payload: id
    });
  }
  return (
    <Globalcontext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        addToCart,
        removeCart,
        increase,
        decrease,
      }}
    >
      {children}
    </Globalcontext.Provider>
  );
};
