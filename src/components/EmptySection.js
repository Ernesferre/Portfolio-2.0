import { Box } from "@chakra-ui/react";
import React from "react";

const EmptySection = (props) => {
  return <Box bg={props.isDark ? "black" : "white"} h="16rem"></Box>;
};

export default EmptySection;
