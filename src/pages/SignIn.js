import React, { useState } from "react";

import classes from "./SignIn.module.css";

const SignIn = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
  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;
  const enteredEmailIsValid = enteredEmail.includes("@");

  const enteredPasswordIsValid = enteredPassword.length >= 8;

  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const enteredPasswordIsInvalid =
    !enteredPasswordIsValid && enteredPasswordTouched;

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const passwordInputBlurHandler = (event) => {
    setEnteredPasswordTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredEmailTouched(true);
    setEnteredPasswordTouched(true);
    if (!enteredEmailIsValid) {
      return;
    }

    if (!enteredPasswordIsValid) {
      return;
    }

    setEnteredEmail("");
    setEnteredPassword("");
    setEnteredEmailTouched(false);
    setEnteredPasswordTouched(false);
  };

  return (
    <div className={classes.main}>
      <form onSubmit={formSubmitHandler}>
        <h2 className={classes["login"]}>Log In</h2>
        <div className={classes["form-control"]}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            value={enteredEmail}
          />
          {enteredEmailIsInvalid && (
            <p className={classes["error-text"]}>Please enter a valid</p>
          )}
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={passwordInputChangeHandler}
            onBlur={passwordInputBlurHandler}
            value={enteredPassword}
          />
        </div>
        {enteredPasswordIsInvalid && (
          <p className={classes["error-text"]}>
            Password should contain atleast 8 characters.
          </p>
        )}
        <div className={classes["form-action"]}>
          <button className={classes.button}>Sign In</button>
        </div>
        <div>
          <p className={classes["link-pass"]}>
            <a href="#">Forgot password?</a> or <a href="#">Sign up</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
