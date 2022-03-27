import React, { useContext, useState } from "react";
import Modal from "../../components/UI/Modal";

import classes from "./AddToCartModal.module.css";
import { SecondaryButtonOutline } from "../../components/Button/Button";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const AddToCartModal = (props) => {
  const { item } = props;

  const cartCtx = useContext(CartContext);

  const existingItem = cartCtx.items.find((i) => i.id === item.id);
  const [qty, setQty] = useState(existingItem ? existingItem.qty : 1);

  // Total Amount = Item Price X Qty
  const totalAmount = `$${(item.price * qty).toFixed(2)}`;

  const addCartItemHandler = () => {
    cartCtx.addItem({ ...item, qty: qty });
  };

  return (
    <Modal onClose={props.onClose}>
      <button className={classes.btn} onClick={props.onClose}>
        x
      </button>
      <CartItem item={item} qty={qty} setQty={setQty} />
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <SecondaryButtonOutline
          onClick={() => {
            addCartItemHandler();
            props.onClose();
          }}
          text="Add to Cart"
        ></SecondaryButtonOutline>
        {/* {hasItems && (
          <SecondaryButtonOutline text="Proceed to Checkout"></SecondaryButtonOutline>
        )} */}
      </div>
    </Modal>
  );
};

export default AddToCartModal;
