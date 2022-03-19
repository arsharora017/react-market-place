import React, { Fragment } from "react";
import CategorySections from "./CategorySections";
import fitness from "../../assets/fitness.jpg";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <Fragment>
      <div className={classes["back-image"]}>
        <img src={fitness} alt="fitness supplies" />
      </div>
      <CategorySections />
    </Fragment>
  );
};

export default LandingPage;
