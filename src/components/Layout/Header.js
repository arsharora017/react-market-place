import React, { Fragment } from "react";
import classes from "./Header.module.css";
import NavBar from "./NavBar";

const Header = (props) => {
  return (
    <div className={classes.container}>
      <Fragment>
        <header className={classes.header}>
          <h1> Die Hard Market</h1>
          <NavBar />
        </header>
      </Fragment>
    </div>
  );
};

export default Header;
