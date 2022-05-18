import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./LandingPage/CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const updateItemQtyInState = (item, qty) => {
    cartContext.addItem({ ...item, qty: qty });
  };

  // Items:
 /*
[ 
  {
    price: 8,
    qty: 3
  }, 
  {
    price: 15,
    qty: 5
  } 
]
 */

  const addToShoppingCart = cartContext.items.map((item) => (
    <CartItem
      item={item}
      qty={item.qty}
      setQty={(newQty) => updateItemQtyInState(item, newQty)}
    />
  ));


let totalAmountNumber = 0;
let totalAmount;
for (let i = 0; i < cartContext.items.length; i++) {
  const item = cartContext.items[i];
  const totalItemAmount = item.price * item.qty;
  // console.log('amounts: ', {totalAmount, totalItemAmount})
  totalAmountNumber = Number((totalAmountNumber + totalItemAmount).toFixed(2))
  totalAmount = `$${totalAmountNumber}`
}

/*
i=0
initially totalItemAmount: null
totalItemAmount: 8*3 = 24
totalAmount: 0 + 24 = 24

i=1
initially totalItemAmount: 24
totalIemAmount: 15*5 = 75
totalAmount: 75 + 24 = 99


*/

 

  return (
    <div className={classes["cart-wrapper"]}>
      <div className={classes["shop-cart"]}>
        <h2>Shopping Cart.</h2>
      </div>
      {addToShoppingCart}
      <div className={classes["amount-wrapper"]}>
        <span>Total Amount:&nbsp;</span>
        <span>{totalAmount}</span>
      </div>
    </div>
  );
};

export default Cart;
