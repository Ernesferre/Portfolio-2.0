import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/layout";
import React from "react";
import GoBack from "../GoBack";
import Title from "../Title";
import { StoreContext } from "../Context/StoreContext";
import { useContext } from "react";

const WorkExperience = () => {
  const { english } = useContext(StoreContext);

  return (
    <Box
    // w="90%"
    >
      <Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem colSpan={1}>
            <GoBack />
          </GridItem>

          <GridItem colSpan={1} colStart={[2, 3]} colEnd={[3, 4]}>
            <Title
              title={english ? "Work Experience" : "Experiencia Laboral"}
            />
          </GridItem>
        </Grid>
      </Box>
      <Box mt="2rem" w={["83%", "70%", "60%"]} mx="auto">
        <ul>
          <li>
            <Text
              fontSize="1rem"
              mb="0.7rem"
              fontWeight="bold"
              color="yellow.500"
            >
              Coderhouse | Tutor de React Js y Javascript | Feb 2021 -
              Actualidad.
            </Text>
            <Text fontSize="0.8rem">
              Brindar apoyo y acompañar a estudiantes en su camino para ser
              desarrolladores Frontend. A cargo de aproximadamente 20 alumnos
              por curso. Corrección de desafíos semanales y de entregas
              parciales de sus proyectos finales.
            </Text>
          </li>
          <li>
            <Text
              fontSize="1rem"
              mb="0.7rem"
              mt="1rem"
              fontWeight="bold"
              color="yellow.500"
            >
              H&H, Responsable de Compras | Mar 2019 | May 2020.
            </Text>
          </li>
          <li>
            <Text
              fontSize="1rem"
              mb="0.7rem"
              mt="1rem"
              fontWeight="bold"
              color="yellow.500"
            >
              Arcor, Comprador Corporativo | Nov 2013 | Ene 2018.
            </Text>
          </li>
          <li>
            <Text
              fontSize="1rem"
              mb="0.7rem"
              mt="1rem"
              fontWeight="bold"
              color="yellow.500"
            >
              Renault, Comprador Productivo | Feb 2011 | Mar 2013.
            </Text>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default WorkExperience;
