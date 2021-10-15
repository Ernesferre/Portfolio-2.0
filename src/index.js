import React from "react";
import ReactDOM from "react-dom";
// import theme from "./styles/theme.js";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "./index.css";
import { theme } from "./resources/theme/index";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="light"></ColorModeScript>

      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
