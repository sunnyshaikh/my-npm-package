import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(5),
}));

export const MuiButton: React.FC<ButtonProps> = (props) => {
  const { children, ...others } = props;
  return <StyledButton {...others}>{children}</StyledButton>;
};

export const MuiButton2: React.FC<React.PropsWithChildren> = (props) => {
  const { children, ...others } = props;
  return <Button {...others}>{children}</Button>;
};
