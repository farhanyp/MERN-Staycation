import React from "react";
import propsTypes from "prop-types";

const Button = (props) => {
  const className = [props.className];
  return (
    <button className={className.join(" ")} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

Button.propsTypes = {
  className: propsTypes.string,
  onClick: propsTypes.func,
};

export default Button;
