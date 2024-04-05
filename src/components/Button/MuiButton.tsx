import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSnackbarProviderWrapper } from "../../context";

const StyledButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(5),
}));

export const MuiButton: React.FC<ButtonProps> = (props) => {
  const { children, ...others } = props;
  const { maxSnack } = useSnackbarProviderWrapper();
  return (
    <StyledButton {...others}>
      {children} {maxSnack}
    </StyledButton>
  );
};

export const MuiButton2: React.FC<React.PropsWithChildren> = (props) => {
  const { children, ...others } = props;
  return <Button {...others}>{children}</Button>;
};
