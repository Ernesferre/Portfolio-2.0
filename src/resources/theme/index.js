import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    primary: "#0A8CD1",
    secondary: "#D10D0A",
    accent: "#D1920A",
  },
};

const styles = {
  global: {
    "html, body": {
      color: "white",
      bg: "black",
    },
  },
};

export const theme = extendTheme({ colors, styles });
