import { HStack, Link, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  Image,
  Box,
  Img,
  VStack,
  Heading,
  Text,
  Grid,
  IconButton,
} from "@chakra-ui/react";
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";

import { useContext } from "react";
import espaniol from "../assets/espaniol.png";
import englishh from "../assets/englishh.png";
import { StoreContext } from "./Context/StoreContext";

const Header = ({ toggleColorMode, isDark }) => {
  console.log(isDark);

  const { english, ChangeLangEn, ChangeLangEs } = useContext(StoreContext);

  console.log(english);

  return (
    <HStack
      mb="1"
      mr={2}
      p={4}
      spacing={6}
      position="sticky"
      top="0"
      zIndex="1"
    >
      <IconButton
        ml="4"
        mt="0.25rem"
        icon={isDark ? <FaSun /> : <FaMoon />}
        isRound="true"
        onClick={toggleColorMode}
        color={isDark ? "black" : "yellow.600"}
        alignSelf="flex-start"
        bg={isDark ? "yellow.600" : "black"}
        _hover={{
          boxShadow: "dark-lg",
        }}
      ></IconButton>

      <Img
        src={englishh}
        ml="10rem"
        rounded="full"
        p="3.7px"
        w="3rem"
        isRound="true"
        cursor="pointer"
        onClick={() => {
          ChangeLangEn();
        }}
        _hover={{
          boxShadow: "dark-lg",
        }}
        // alignSelf="flex-start"
      ></Img>

      <Img
        src={espaniol}
        ml="3"
        rounded="full"
        // p="1px"
        // border="0"
        // borderColor="transparent"
        w="3rem"
        isRound="true"
        cursor="pointer"
        onClick={() => {
          ChangeLangEs();
        }}
        alignSelf="flex-start"
        _hover={{
          boxShadow: "dark-lg",
          borderColor: "transparent",
        }}
      ></Img>

      <Spacer> </Spacer>

      <Link
        isRound="true"
        alignSelf="flex-start"
        // icon={<FaGithub />}
        ml="6"
        mr="4"
        fontSize="x-large"
        href="https://github.com/Ernesferre"
        isExternal
      >
        <FaGithub
          alignSelf="flex-start"
          color="yellow.600"
          _hover={{
            boxShadow: "dark-lg",
          }}
        />
      </Link>

      <Link
        isRound="true"
        alignSelf="flex-start"
        ml="6"
        fontSize="x-large"
        href="https://www.linkedin.com/in/ernes-ferreyra/"
        isExternal
      >
        <FaLinkedin />
      </Link>

      {/* <IconButton
                isRound="true"
                icon={<FaLinkedin />}
                ml="2"
            >
            </IconButton> */}
    </HStack>
  );
};

export default Header;
