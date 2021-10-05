import { Button } from "@chakra-ui/button";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useColorMode } from "@chakra-ui/color-mode";

const GoBack = () => {
  const history = useHistory();

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const handleBack = () => {
    history.push("/");
  };

  return (
    <Button
      bg={isDark ? "black" : "white"}
      onClick={() => {
        handleBack();
      }}
      w="2rem"
      ml={["1rem", "2rem"]}
      mt={["1.5rem", "1.5rem"]}
    >
      <span>
        <FaArrowLeft />
      </span>
      {/* <h6> Back </h6> */}
    </Button>
  );
};

export default GoBack;
