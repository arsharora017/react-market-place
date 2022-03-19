import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./LandingPage/CartItem";

const Cart = () => {
  const cartContext = useContext(CartContext);

  const updateItemQtyInState = (item, qty) => {
    cartContext.addItem({ ...item, qty: qty });
  };

  return (
    <>
      {cartContext.items.map((item) => (
        <CartItem
          item={item}
          qty={item.qty}
          setQty={(newQty) => updateItemQtyInState(item, newQty)}
        />
      ))}
    </>
  );
};

export default Cart;
