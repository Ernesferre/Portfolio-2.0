import { Img } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import React from "react";
import wa from "../assets/wa.png";

const WhatsApp = () => {
  return (
    <Box
      w="5rem"
      h="5rem"
      position="fixed"
      right="1rem"
      bottom="1rem"
      cursor="pointer"
    >
      <a href="https://wa.me/5493515497313">
        <Img src={wa} alt="whatsapp" w="5rem" h="5rem" />{" "}
      </a>
    </Box>
  );
};

export default WhatsApp;
