import React from "react";
import {
  Box,
  Text,
  Image,
  Button,
  Flex,
  VStack,
  Container,
  Link,
  Heading,
} from "@chakra-ui/react";
import HeadShake from "react-reveal/HeadShake";

const Card = (props) => {
  console.log(props.isDark);

  return (
    <VStack
      maxW="17rem"
      height="20rem"
      position="relative"
      color={props.isDark ? "black" : "black"}
      fontFamily="Roboto"
      // border="1px"
      m="2rem"
      bg={props.isDark ? "white" : "white"}
      p="0.3rem"
      bg="gray.300"
      _hover={{
        boxShadow: "0 0 20px #8e9273",
      }}
    >
      <Image
        objectFit="cover"
        width="30rem"
        height="9rem"
        src={props.picture}
        fallbackSrc="https://via.placeholder.com/382x300"
        // mb="2rem"
      />

      <Heading
        size="md"
        textAlign="center"
        letterSpacing="2px"
        fontWeight="bold"
        mb="1rem"
        fontFamily="Amatic SC"
      >
        {props.titulo}
      </Heading>

      <Flex flexDir="column" fontSize={10}>
        <Box
          textAlign="left"
          marginLeft="1em"
          marginRight="1em"
          maxHeight="3em"
          overflow="hidden"
          color="dark"
        >
          {/* <p > Descripcion: </p>  */}
          {props.descripcion}
        </Box>

        <Box
          mt={2}
          mb={4}
          textAlign="left"
          marginLeft="1em"
          marginRight="1em"
          maxHeight="3em"
          overflow="hidden"
          color="grey"
          // color={ props.isDark ? "black" : "white"}
        >
          <p fontWeight="semibold"> Tecnologias Usadas: </p> {props.used_Tecs}
        </Box>

        <Flex justifyContent="center" mb="1rem">
          <Link href={props.url} isExternal>
            <Button
              boxShadow="2xl"
              textDecoration="none"
              m="0.5em"
              fontFamily="Amatic SC"
              letterSpacing={2}
              color={props.isDark ? "yellow.300" : "black"}
              bg={props.isDark ? "black" : "yellow.600"}
              _hover={{
                textDecoration: "none",
              }}
              // textTransform="uppercase"
              size="sm"
            >
              Visit Page
            </Button>
          </Link>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default Card;
