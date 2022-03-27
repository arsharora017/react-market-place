import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./LandingPage/CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const updateItemQtyInState = (item, qty) => {
    cartContext.addItem({ ...item, qty: qty });
  };

  const addToShoppingCart = cartContext.items.map((item) => (
    <CartItem
      item={item}
      qty={item.qty}
      setQty={(newQty) => updateItemQtyInState(item, newQty)}
    />
  ));

  let inputArray = addToShoppingCart;

  let priceArray = inputArray.map((item) => item.props.item.price);
  let qtyArray = inputArray.map((item) => item.props.qty);

  const arrayProductAndSum = (priceArray = [], qtyArray = []) => {
    let sum = 0;
    for (let i = 0; i < priceArray.length; i++) {
      const arrayProduct = priceArray[i] * qtyArray[i];
      sum += arrayProduct;
    }
    return sum;
  };

  const totalAmount = `$${arrayProductAndSum(priceArray, qtyArray).toFixed(2)}`;

  return (
    <div className={classes["cart-wrapper"]}>
      <div className={classes["shop-cart"]}>
        <h2>Shopping Cart.</h2>
      </div>
      {addToShoppingCart}
      <div className={classes["amount-wrapper"]}>
        <span>Total Amount: </span>
        <span>{totalAmount}</span>
      </div>
    </div>
  );
};

export default Cart;
