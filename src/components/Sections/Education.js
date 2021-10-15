import { Box, Grid, GridItem, Text, Heading } from "@chakra-ui/layout";
import React from "react";
import GoBack from "../GoBack";
import Title from "../Title";
import { StoreContext } from "../Context/StoreContext";
import { useContext } from "react";

const Education = ({ isDark }) => {
  const { english } = useContext(StoreContext);

  return (
    <Box>
      <Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem colSpan={1}>
            <GoBack isDark={isDark} />
          </GridItem>

          <GridItem colSpan={1} colStart={[3]} colEnd={[4]}>
            <Title title={english ? "Education" : "Educación"} />
          </GridItem>
        </Grid>
      </Box>

      <Box mt="2rem" w={["83%", "70%", "60%"]} mx="auto">
        <Heading
          textAlign="center"
          color="yellow.500"
          mb="2rem"
          textDecoration="underline"
          fontFamily="Amatic SC"
          letterSpacing={2}
        >
          Educacion Principal
        </Heading>
        <ul>
          <li mb="6rem">
            <Text
              fontSize="1rem"
              mb="0.7rem"
              color={isDark ? "white" : "black"}
            >
              <Text fontWeight="medium" fontSize={["1.2rem", "1.5rem"]}>
                {" "}
                Ingeniería Industrial
              </Text>
              <Text mb="0.5rem">Universidad Católica de Cordoba </Text>
              <Text color="gray.500" mb="2rem">
                {" "}
                Feb 2002 - Mar 2008
              </Text>
            </Text>
            <Text fontSize="0.8rem" color={isDark ? "white" : "black"}></Text>
          </li>

          <li>
            <Text
              fontSize="1rem"
              mb="0.7rem"
              color={isDark ? "white" : "black"}
            >
              <Text fontWeight="medium" fontSize={["1.2rem", "1.5rem"]}>
                MBA (Parcial)
              </Text>{" "}
              <Text mb="0.5rem">Universidad Siglo 21 </Text>
              <Text color="gray.500" mb="2rem">
                {" "}
                Feb 2017 - Mar 2018{" "}
              </Text>
            </Text>
          </li>

          <li>
            <Text
              fontSize="1rem"
              mb="0.7rem"
              color={isDark ? "white" : "black"}
            >
              <Text fontWeight="medium" fontSize={["1.2rem", "1.5rem"]}>
                Bachiller en Economia y Gestión de las Organizaciones
              </Text>
              <Text mb="0.5rem">Colegio Lasalle </Text>

              <Text color="gray.500" mb="2rem">
                {" "}
                Ene 1996 - Dic 2001
              </Text>
            </Text>
          </li>
        </ul>
      </Box>

      <Box mt="2rem" w={["83%", "70%", "60%"]} mx="auto">
        <Heading
          textAlign="center"
          color="yellow.500"
          mb="2rem"
          textDecoration="underline"
          fontFamily="Amatic SC"
          letterSpacing={2}
        >
          Cursos de Formacion
        </Heading>
        <ul>
          <li mb="6rem">
            <Text color={isDark ? "white" : "black"}>
              <Text fontWeight="medium" fontSize={["1.2rem", "1.5rem"]}>
                {" "}
                Alkemy{" "}
              </Text>
              <Text mb="0.5rem">
                {" "}
                Aceleracion React Js | Metodologias Agiles (Jira) | Simulacion
                de un proyecto integral para ONG | Git | BitBucket | Trabajo en
                Equipo
              </Text>
            </Text>
            <Text color="gray.500" mb="2rem">
              Abr 2021 - Julio 2021
            </Text>
          </li>

          <li mb="6rem">
            <Text
              fontSize="1rem"
              mt="0.5rem"
              color={isDark ? "white" : "black"}
            >
              <Text fontWeight="medium" fontSize={["1.2rem", "1.5rem"]}>
                {" "}
                Coderhouse{" "}
              </Text>
              <Text mb="0.5"> React Js </Text>
            </Text>
            <Text color="gray.500" mb="2rem">
              Nov 2020 - Ene 2021
            </Text>
          </li>

          <li mb="6rem">
            <Text
              fontSize="1rem"
              mt="0.5rem"
              color={isDark ? "white" : "black"}
            >
              <Text fontWeight="medium" fontSize={["1.2rem", "1.5rem"]}>
                {" "}
                Coderhouse{" "}
              </Text>
              <Text mb="0.5"> Javascript </Text>
            </Text>
            <Text color="gray.500" mb="2rem">
              Oct 2020 - Nov 2021
            </Text>
          </li>
          <li mb="6rem">
            <Text
              fontSize="1rem"
              mt="0.5rem"
              color={isDark ? "white" : "black"}
            >
              <Text fontWeight="medium" fontSize={["1.2rem", "1.5rem"]}>
                {" "}
                Udemy{" "}
              </Text>
              <Text mb="0.5">
                {" "}
                React Js (Fernando Herrera / Maximilian Schwarzmuller){" "}
              </Text>
            </Text>
            <Text color="gray.500" mb="2rem">
              Feb 2021 - Abr 2021
            </Text>
          </li>

          <li mb="6rem">
            <Text
              fontSize="1rem"
              mt="0.5rem"
              color={isDark ? "white" : "black"}
            >
              <Text fontWeight="medium" fontSize={["1.2rem", "1.5rem"]}>
                {" "}
                Udemy{" "}
              </Text>
              <Text mb="0.5"> Javascript (Juan De La Torre ) </Text>
            </Text>
            <Text color="gray.500" mb="2rem">
              Nov 2020 - Feb 2021
            </Text>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default Education;
