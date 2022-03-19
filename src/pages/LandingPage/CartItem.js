import React from "react";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { item, qty, setQty } = props;

  const price = `$${item.price}`;

  const decreaseQtyHandler = () => {
    if (qty > 1) {
      setQty(qty - 1);
    } else return;
  };

  const increaseQtyHandler = () => {
    setQty(qty + 1);
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
        <button
          onClick={() => {
            decreaseQtyHandler();
          }}
        >
          -
        </button>
        <p>{qty}</p>
        <button
          onClick={() => {
            increaseQtyHandler();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
