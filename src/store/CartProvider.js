import React from "react";
import { useReducer } from "react";
import CartContext from "./cart-context";

// ACTION TYPES
const ADD_ITEM = "Cart/AddItem";
const REMOVE_ITEM = "Cart/RemoveItem";

const initialState = {
  items: [],
  totalAmount: 0,
};

// state - it is simply the last state managed by reducer
const reducer = (state, action) => {
  if (action.type === ADD_ITEM) {
    const existingCartItem = state.items.find(
      (item) => item.id === action.payload.id
    );

    if (existingCartItem) {
      // console.log(existingCartItem);
      existingCartItem.qty = action.payload.qty;

      const newState = { ...state, items: state.items };

      return newState;
    } else {
      const itemToAdd = action.payload;

      const newItems = [...state.items, itemToAdd];

      const newState = {
        ...state,
        items: newItems,
      };
      return newState;
    }
  }

  if (action.type === REMOVE_ITEM) {
    console.log("Looking for Item with ID: ", action.payload.id);
    console.log(state.items);
    const existingCartItem = state.items.find(
      (item) => item.id === action.payload
    );

    console.log(existingCartItem);

    if (existingCartItem) {
      const newItems = state.items.filter((item) => item.id !== action.payload);
      const newState = { ...state, items: newItems };

      return newState;
    } else {
      return state;
    }
  }
};

const CartProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // here state is state snapshot
  // console.log(state);

  const addItemToCartHandler = (item) => {
    dispatch({
      type: ADD_ITEM,
      payload: item,
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatch({
      type: REMOVE_ITEM,
      payload: id,
    });
  };

  // this gives us the latest state
  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
