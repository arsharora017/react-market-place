import React, { useContext } from "react";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import CartIcon from "../Cart/CartIcon";

import { SecondaryButton } from "../Button/Button";
import CartContext from "../../store/cart-context";

const NavBar = (props) => {
  const cartContext = useContext(CartContext);

  const totalCartQty = cartContext.items.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  // console.log(totalCartQty

  return (
    <div className={classes["navbar"]}>
      <NavLink to="/LandingPage">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/SignIn">Sign In</NavLink>
      <NavLink to="/Cart">
        <SecondaryButton
          text="Cart"
          icon={<CartIcon />}
          badge={totalCartQty}
          size="medium"
        ></SecondaryButton>
      </NavLink>
    </div>
  );
};

export default NavBar;
