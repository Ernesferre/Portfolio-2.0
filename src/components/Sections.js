import React from "react";
import { Box, Button, SimpleGrid, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { StoreContext } from "./Context/StoreContext";
import { useContext } from "react";

const Sections = (props) => {
  console.log(props.isDark);
  const { english } = useContext(StoreContext);
  console.log("Desde Section:", english);

  return (
    <Fade>
      <Box
        w={["95%", "80%"]}
        mx="auto"
        mb="6rem"
        alignSelf="center"
        bg={props.isDark ? "black" : "white"}
        textAlign="center"
        fontFamily="Amatic SC"
        fontWeight="700"
      >
        <SimpleGrid
          bg={props.isDark ? "black" : "white"}
          columns={[1, 2, 2, 4]}
          spacing="1rem"
          flexWrap="wrap"
          textAlign="center"
          rounded="lg"
          color="black"
          mt={8}
          fontWeight="700"
        >
          <Link to="/profile">
            <Button
              // boxShadow="md"
              w={["280px", "200px"]}
              p="6"
              rounded="md"
              bg="yellow.600"
              color="black"
              letterSpacing="10px"
              textDecorationLine="none"
              _hover={{ textDecoration: "none" }}
              // boxShadow="2xl"

              text
              href="profile"
              _hover={{
                boxShadow: "0 0 20px #8e9273",
              }}
            >
              {english ? <h3>Profile</h3> : <h3>Perfil</h3>}
            </Button>
          </Link>

          <Link to="/skills">
            <Button
              boxShadow="md"
              w={["280px", "200px"]}
              p="6"
              rounded="md"
              bg="yellow.600"
              color="black"
              letterSpacing="10px"
              textDecorationLine="none"
              _hover={{ textDecoration: "none" }}
              boxShadow="2xl"
              _hover={{
                boxShadow: "0 0 20px #8e9273",
              }}
            >
              {english ? <h3>Skills</h3> : <h3>Habilidades</h3>}
            </Button>
          </Link>

          <Link to="/portfolio">
            <Button
              boxShadow="md"
              w={["280px", "200px"]}
              p="6"
              rounded="md"
              bg="yellow.600"
              color="black"
              letterSpacing="10px"
              textDecorationLine="none"
              _hover={{ textDecoration: "none" }}
              boxShadow="2xl"
              _hover={{
                boxShadow: "0 0 20px #8e9273",
              }}
            >
              Portfolio
            </Button>
          </Link>

          <Link to="/workexperience">
            <Button
              boxShadow="md"
              w={["280px", "200px"]}
              p="6"
              rounded="md"
              bg="yellow.600"
              color="black"
              letterSpacing="4px"
              textDecorationLine="none"
              _hover={{ textDecoration: "none" }}
              boxShadow="2xl"
              _hover={{
                boxShadow: "0 0 20px #8e9273",
              }}
            >
              {english ? (
                <h3>Work Experience</h3>
              ) : (
                <h3>Experiencia Laboral</h3>
              )}
            </Button>
          </Link>

          <GridItem colSpan={1} colStart={[1, 2]} colEnd={[1, 3]}>
            <Link to="/resume">
              <Button
                boxShadow="md"
                w={["280px", "200px"]}
                p="6"
                rounded="md"
                bg="yellow.600"
                color="black"
                letterSpacing="8px"
                textDecorationLine="none"
                _hover={{ textDecoration: "none" }}
                boxShadow="2xl"
                _hover={{
                  boxShadow: "0 0 20px #8e9273",
                }}
              >
                {english ? <h3>Resume</h3> : <h3>CV</h3>}
              </Button>
            </Link>
          </GridItem>

          <GridItem colSpan={1} colStart={[1, 3]} colEnd={[1, 4]}>
            <Link to="/education">
              <Button
                boxShadow="md"
                w={["280px", "200px"]}
                p="6"
                rounded="md"
                bg="yellow.600"
                color="black"
                letterSpacing="10px"
                textDecorationLine="none"
                _hover={{ textDecoration: "none" }}
                boxShadow="2xl"
                _hover={{
                  boxShadow: "0 0 20px #8e9273",
                }}
              >
                {english ? <h3>Education</h3> : <h3>Educación</h3>}
              </Button>
            </Link>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Fade>
  );
};

export default Sections;
