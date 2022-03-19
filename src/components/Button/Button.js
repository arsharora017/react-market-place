import classNames from "classnames";
import React from "react";
import css from "./Button.module.css";

const Button = (props) => {
  const {
    rootClass,
    icon,
    text,
    badge,
    colorTheme = "primary",
    size = "medium",
    ...rest
  } = props;

  const buttonClasses = classNames(
    rootClass,
    css.button,
    css[colorTheme],
    css[size]
  );

  return (
    <button {...rest} className={buttonClasses} onClick={props.onClick}>
      <span className={css.contentWrapper}>
        {icon ? <span className={css.icon}>{icon}</span> : null}
        {text ? <span>{text}</span> : null}
        {badge != null ? <span className={css.badge}>{badge}</span> : null}
      </span>
    </button>
  );
};

export const PrimaryButton = (props) => (
  <Button colorTheme="primary" onClick={props.onClick} {...props}></Button>
);

export const PrimaryButtonOutline = (props) => (
  <Button colorTheme="primary-outline" {...props}></Button>
);

export const SecondaryButton = (props) => (
  <Button colorTheme="secondary" {...props}></Button>
);

export const SecondaryButtonOutline = (props) => (
  <Button colorTheme="secondary-outline" {...props}></Button>
);

export default Button;
