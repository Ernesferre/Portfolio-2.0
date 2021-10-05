import { Heading } from "@chakra-ui/layout";
import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";

const Title = ({ title }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Heading
      color={isDark ? "yellow.600" : "black"}
      fontSize="6xl"
      letterSpacing={4}
      fontFamily="Amatic SC"
      fontWeight="700"
      //   textAlign="center"
    >
      {title}
    </Heading>
  );
};

export default Title;
