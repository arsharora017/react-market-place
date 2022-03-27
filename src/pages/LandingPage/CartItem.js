import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { item, qty, setQty } = props;
  const cartContext = useContext(CartContext);

  const price = `$${item.price}`;

  const decreaseQtyHandler = () => {
    if (qty > 1) {
      setQty(qty - 1);
    } else return;
  };

  const increaseQtyHandler = () => {
    setQty(qty + 1);
  };

  const removeCartItemHandler = () => {
    cartContext.removeItem(item.id);
  };

  const cartItemHandler = () => {
    if (qty > 1) {
      decreaseQtyHandler();
    } else {
      removeCartItemHandler();
    }
  };

  return (
    <div className={classes["cart-item"]}>
      <div>
        <div className={classes.image}>
          <img className={classes.img} src={item.img} alt={item.title} />
        </div>
      </div>
      <div className={classes.summary}>
        <h2>{item.title}</h2>
        <span className={classes.price}>{price}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={cartItemHandler}>-</button>
        <p>{qty}</p>
        <button onClick={increaseQtyHandler}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
