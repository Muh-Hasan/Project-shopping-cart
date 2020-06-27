import React, { useContext } from "react";
import { Globalcontext } from "../context/globalcontext";

import Passcart from "./passcart";

const Cart = () => {
  const { cart } = useContext(Globalcontext);

  // for total price 
  const totalprice = cart.reduce((total, cart) => total + (cart.price)*cart.quantity, 0);
  
  // for single price
  // later commit 
  // var a = []
  // for (var i = 0 ; i <= cart.length-1; i++){
  //   var b = cart[i].price * cart[i].quantity
  //   a.push({key : b}) 
  // }
  
  
  return (
    <div>
      <table >
        <thead >
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <Passcart key={item.id} product={item}/>
          ))}
        </tbody>
      </table>
      <h5 className='total-align'>Total : ${totalprice}</h5>
    </div>
  );
};

export default Cart;
