import {
  Box,
  Link,
  Image,
  Container,
  Text,
  Center,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import cv from "../../assets/cv.PNG";
import React from "react";
import Bounce from "react-reveal/Bounce";
import GoBack from "../GoBack";
import Title from "../Title";
import { StoreContext } from "../Context/StoreContext";
import { useContext } from "react";

const Resume = ({ isDark }) => {
  const { english } = useContext(StoreContext);

  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <GoBack isDark={isDark} />
        </GridItem>

        <GridItem colSpan={1} colStart={3} colEnd={4} textAlign="center">
          <Title title={english ? "Resume" : "CV"} />
        </GridItem>
      </Grid>

      <Bounce top>
        <Container
          placeItems="center"
          mt="4rem"
          // mb={4}
          id="resume"
        >
          <Text
            color="grey.200"
            // mb={6}
            textAlign="center"
          >
            Click image to open in big screen
          </Text>

          <Link
            href="https://drive.google.com/file/d/1RpORj2yogxKt6sgouwdo1ORyxk4fWOCo/view?usp=sharing"
            isExternal
          >
            <Center>
              <Image src={cv} borderRadius={7}></Image>
            </Center>
          </Link>
        </Container>
      </Bounce>
    </>
  );
};

export default Resume;
