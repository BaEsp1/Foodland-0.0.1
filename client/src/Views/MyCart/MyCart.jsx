// En MyCart
import "./MyCart.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useLocalStore from "../../hooks/useLocalStore";
//IMPORT COMPONENTS:
import CheckOut from "../../Components/Checkout/CheckOut"
import CartItem from "../../Components/CartItem/CartItem";
import { useDispatch } from "react-redux";
import { updateCart as updateCartRedux } from "../../redux/actions/cartActions";
import Car from "../../Imgs/Icons/carrito.png";

function MyCart() {
  const [cart, setCart] = useLocalStore("Carrito", []);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    const newTotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setTotal(newTotal);
  }, [cart]);

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: newQuantity };
      } else {
        return product;
      }
    });
    setCart(updatedCart);
    dispatch(updateCartRedux(updatedCart));
  };

  const removeItem = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    dispatch(updateCartRedux(updatedCart));
  };

  return (
    <div name="MyCart" className="MyCart">
      <div name="Container My cart && Payment " className="ContainerPage">
        <div className="page">
          <div id="store_cart">
            <ul className="cart_head">
              <li className="cart_head_title">
                <img src={Car} alt="Mycart" className="logoCart" />
              </li>
              <li className="cart_head_product">Product</li>
              <li className="cart_head_options">Quantity</li>
              <li className="cart_head_price">Price</li>
            </ul>
            {cart.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
                updateCartTotal={setTotal}
                total={total}
              />
            ))}
            <ul className="cart_foot">
              <li className="cart_head_title">Total</li>
              <li>
                <p>${total.toFixed(2)}</p>
              </li>
            </ul>
          </div>
        </div>

        {/* ==================Container CheckOut=============== */}
          <CheckOut total={total}/>
      </div>
      <div name="Container Button back" className="ButonReturn">
        <p>Did you forget something?</p>
        <button className="butonBack">
          <Link to="/">Keep buying</Link>
        </button>

      </div>
    </div>
  );
}

export default MyCart;
