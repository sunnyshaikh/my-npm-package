import React from "react";
import { useSnackbar } from "notistack";

type ButtonProps = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;

const Button: React.FC<ButtonProps> = (props) => {
  const { children, ...others } = props;
  return (
    <button
      {...others}
      style={{
        padding: "1rem 1.5rem",
        background: "#007bff",
        color: "#fff",
        border: 0,
        outline: 0,
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};

export { Button };
