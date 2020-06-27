import React, { useContext } from "react";

// components
import "./App.css";
import Passproduct from "./components/passProduct";
import { Globalcontext } from "./context/globalcontext";
import Cart from "./components/cart";

// router
import { Link, Route, Routes } from "react-router-dom";

export default function App() {

  // total items in cart
  const { cart } = useContext(Globalcontext);
  const total_items = cart.reduce((total, cart) => total + cart.quantity, 0)

  return (
    <>
      <div className='main'>
        <Link to="/">
          <span className='button-align'>
          <button className='button1'>Home</button>
          </span>
        </Link>
        <Link to="cart">
          <span className='button-align'>
          <button className='button1'>Cart ({total_items})</button>
          </span>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Passproduct />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
}
