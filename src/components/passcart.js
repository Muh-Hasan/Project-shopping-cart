import React, { useContext } from "react";
import { Globalcontext } from "../context/globalcontext";

function Passcart({ product }) {
  const { removeCart, increase, decrease } = useContext(Globalcontext);

  const remove = () => {
    removeCart(product.id);
  };

  const increaseQtty = () => {
    increase(product.id);
  };

  const decreaseQtty = () => {
    if (product.quantity <= 1) {
      remove();
    } else {
      decrease(product.id);
    }
  };
  
  
  return (
    <tr>
      <td>
        {product.name}
      </td>

      <td>${product.price}</td>

      <td>{product.quantity}</td>

      <td>
        <button className='cart-button' onClick={increaseQtty}>+</button>
        <button className='cart-button' onClick={decreaseQtty}>-</button>
        <button className='cart-button' onClick={remove}>x</button>
      </td>
    </tr>
  );
}

export default Passcart;
