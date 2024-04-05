// SnackbarProviderWrapperContext.tsx
import React, { createContext, useContext, useMemo } from "react";
import { SnackbarProviderProps, SnackbarProvider } from "notistack";

interface SnackbarProviderContextType {
  snackbarProps: SnackbarProviderProps;
}

const SnackbarProviderWrapperContext =
  createContext<SnackbarProviderContextType | null>(null);

export const useSnackbarProviderWrapper = () => {
  const context = useContext(SnackbarProviderWrapperContext);
  if (!context) {
    throw new Error(
      "useSnackbarProviderWrapper must be used within a SnackbarProviderWrapper"
    );
  }
  return context.snackbarProps;
};

interface SnackbarProviderWrapperProps extends SnackbarProviderProps {
  children: React.ReactNode;
}

export const SnackbarProviderWrapper: React.FC<
  SnackbarProviderWrapperProps
> = ({ children, ...props }) => {
  const contextValue = useMemo(() => ({ snackbarProps: props }), [props]);

  return (
    <SnackbarProviderWrapperContext.Provider value={contextValue}>
      <SnackbarProvider {...props}>{children}</SnackbarProvider>
    </SnackbarProviderWrapperContext.Provider>
  );
};
