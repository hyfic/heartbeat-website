import React from "react";
import { PropsWithChildren } from "react";
import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";

type ReactComponent<Props = {}> = React.FC<PropsWithChildren<Props>>;

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({ config });

export const ChakraWrap: ReactComponent = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
