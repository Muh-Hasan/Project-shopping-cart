import React, { useContext } from "react";
import Product from "./product";
import './overall.css'
import { Globalcontext } from "../context/globalcontext";

const Passproduct = () => {
  const { products } = useContext(Globalcontext);

  return (
    <div className='product-flex-2'>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Passproduct;
