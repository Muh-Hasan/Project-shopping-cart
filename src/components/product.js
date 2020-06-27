import React, { useContext } from "react";
import { Globalcontext } from "../context/globalcontext";

function Product({ product }) {
  const { cart, addToCart, increase } = useContext(Globalcontext);

  const addcart = () => {
    if (cart.find(item => item.id === product.id)) {
      increase(product.id);
    } else {
      product.quantity = 1;
      addToCart({ product });
    }
  };
  return (
    < >
      <div className="product-flex">
        <h4>{product.name}</h4>
        <h5>${product.price}</h5>
        <button className='product-button' onClick={addcart}>Add to Cart</button>
      </div>
    </>
  );
}
export default Product;
