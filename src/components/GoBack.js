import { Button } from "@chakra-ui/button";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const GoBack = ({ isDark }) => {
  const history = useHistory();

  const handleBack = () => {
    history.push("/");
  };

  return (
    <Button
      onClick={() => {
        handleBack();
      }}
      w="2rem"
      ml={["1rem", "2rem"]}
      mt={["1.5rem", "1.5rem"]}
    >
      <span>
        <FaArrowLeft color={isDark ? "white" : "black"} />
      </span>
    </Button>
  );
};

export default GoBack;
