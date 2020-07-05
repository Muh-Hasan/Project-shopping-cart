import React, { useContext } from "react";

// components
import "./App.css";
import "./overall.css"
import { Globalcontext } from "./context/globalcontext";

// router
import {
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from "react-router-dom";



export default function App() {

  // total items in cart
  const { cart } = useContext(Globalcontext);
  const total_items = cart.reduce((total, cart) => total + cart.quantity, 0)

  return (
    <>
      <nav className='nav-bar'>
        <Link to="/"><button>Store</button></Link>
        <Link to="cart"><button>Cart({total_items})</button></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Passproduct />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/" element={<ProductD />} >
          <Route path='/' element={<Passproduct />} />
          <Route path="/:pro" element={<LaunchShoe />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}



// components

// initail product
const ProductD = () => {
  return (
    <div >
      <Outlet />
    </div>
  )
}


// passing product 
const Passproduct = () => {
  const { products } = useContext(Globalcontext);

  return (
    <div className='product-flex-2'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

// displaying here
function Product({ product }) {
  const { cart, addToCart, increase } = useContext(Globalcontext);

  // console.log();

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
      <div className='product-flex'>
        <Link to={`/${product.id}`}>
          <div>
            <img src={product.src} alt={product.name} height='270px' width='300px' />
          </div>
          <div className='align-left-product'>
            <h4>{product.name}</h4>
            <h5>${product.price}</h5>
          </div>
        </Link>
        <button className='product-button' onClick={addcart}>Add to Cart</button>
      </div>
    </>
  );
}
// dispaying seperately
function LaunchShoe() {
  const { pro } = useParams();

  const { products, cart, addToCart, increase } = useContext(Globalcontext)

  const product = products.find(item => item.id === parseInt(pro))

  const addcart = () => {
    if (cart.find(item => item.id === product.id)) {
      increase(product.id);
    } else {
      product.quantity = 1;
      addToCart({ product });
    }
  };

  return (
    <>
      <div className='flex-display'>
        <div>
          <img src={product.src} alt={product.name}/>
        </div>
        <div className='margin-left'>
          <h4>{product.name}</h4>
          <h5>${product.price}</h5>
          <button className='product-button' onClick={addcart}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}


// passing values in cart 
function Passcart({ product }) {
  const {  cart,removeCart, increase, decrease } = useContext(Globalcontext);

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
        <img src={product.src} alt={product.name} height='50px' width='50px' />
      </td>
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


// cart 
const Cart = () => {
  const { cart } = useContext(Globalcontext);

  // for total price 
  const totalprice = cart.reduce((total, cart) => total + (cart.price) * cart.quantity, 0);

  // const single_price =  cart.map(item => item.quantity * item.price)  
  return (
    <div>
      <table >
        <thead >
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <Passcart key={item.id} product={item} />
          ))}
        </tbody>
      </table>
      <h5 className='total-align'>Total : ${totalprice}</h5>
    </div>
  );
};

// notfound
function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}
