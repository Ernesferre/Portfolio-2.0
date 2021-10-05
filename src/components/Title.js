import { Heading } from "@chakra-ui/layout";
import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";

const Title = ({ title }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Heading
      color={isDark ? "white" : "black"}
      fontSize="6xl"
      letterSpacing={4}
      fontFamily="Amatic SC"
      fontWeight="700"
      textAlign={["left", "center"]}
      // boxShadow="0 0 20px #8e9273"
      // backgroundColor="transparent"
      // _hover={{
      //   boxShadow: "0 0 20px #8e9273",
      // }}
    >
      {title}
    </Heading>
  );
};

export default Title;
