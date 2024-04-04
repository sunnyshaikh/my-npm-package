import React from "react";
import "./button.css";

type ButtonProps = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;

const Button: React.FC<ButtonProps> = (props) => {
  const { children, ...others } = props;
  return (
    <button {...others} className="button">
      {children}
    </button>
  );
};

export { Button };
