import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/layout";
import React from "react";
import GoBack from "../GoBack";
import Title from "../Title";
import { StoreContext } from "../Context/StoreContext";
import { useContext } from "react";

const WorkExperience = ({ isDark }) => {
  const { english } = useContext(StoreContext);

  return (
    <Box
    // w="90%"
    >
      <Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem colSpan={1}>
            <GoBack isDark={isDark} />
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
          <li mb="6rem">
            <Text
              fontSize="1rem"
              mb="0.7rem"
              fontWeight="bold"
              color="yellow.500"
            >
              Coderhouse | Tutor de React Js y Javascript | Feb 2021 -
              Actualidad.
            </Text>
            <Text fontSize="0.8rem" color={isDark ? "white" : "black"}>
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
            <Text fontSize="0.8rem" color={isDark ? "white" : "black"}>
              Compra y distribución de insumos varios a las diferentes
              hosterías/campos. Búsqueda y desarrollo de nuevos proveedores.
              Manejo y coordinación de equipo logístico para asegurar entregas
              en tiempo y forma. Desarrollo de procedimiento de compras.
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
            <Text fontSize="0.8rem" color={isDark ? "white" : "black"}>
              Negociación de acuerdos corporativos con proveedores calificados
              para abastecer a las diferentes fabricas pertenecientes al grupo.
              Compras para nuevos proyectos provenientes del sector de
              ingeniería corporativa (Obras civiles, termo mecánicas,
              electromecánicas, equipamiento industrial, autoelevadores,
              instrumentación, etc). Análisis de estructura de costos y
              negociación de condiciones comerciales. Generación, liberación y
              seguimiento de órdenes de compra.
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
            <Text fontSize="0.8rem" color={isDark ? "white" : "black"}>
              Compras de materia prima. Análisis del proceso de producción del
              proveedor, detección de ineficiencias, sugerencia de mejoras,
              reducción de costos. Compras de moldes y herramentales. Generación
              de variantes de precios en SAP. Importación de herramentales del
              exterior
            </Text>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default WorkExperience;
