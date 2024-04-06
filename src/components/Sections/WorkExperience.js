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

      <Box
        mt="4rem"
        w={["83%", "70%", "60%"]}
        mx="auto"
        fontFamily="Roboto"
        fontWeight="thin"
      >
        <ul>
          <li mb="6rem">
            <Text
              fontSize="1.5rem"
              mb="0.7rem"
              fontWeight="bold"
              color="yellow.500"
            >
              {english ? (
                <Text>
                  Coderhouseee | React Js & Javascript Tutor | Feb 2021 -
                  Present.
                </Text>
              ) : (
                <Text>
                  Coderhouse | Tutor de React Js y Javascript | Feb 2021 -
                  Actualidad.
                </Text>
              )}
            </Text>
            <Text
              fontSize="1.4rem"
              color={isDark ? "white" : "black"}
              mb="3rem"
            >
              {english ? (
                <Text>
                  Provide support and accompany students on their path to being
                  Frontend developers. In charge of approximately 20 students
                  per course. Correction of weekly challenges and partial
                  deliveries of their final projects.
                </Text>
              ) : (
                <Text>
                  Brindar apoyo y acompañar a estudiantes en su camino para ser
                  desarrolladores Frontend. A cargo de aproximadamente 20
                  alumnos por curso. Corrección de desafíos semanales y de
                  entregas parciales de sus proyectos finales.
                </Text>
              )}
            </Text>
          </li>

          <li>
            <Text
              fontSize="1.5rem"
              mb="0.7rem"
              mt="1rem"
              fontWeight="bold"
              color="yellow.500"
            >
              {english ? (
                <Text>
                  H&H | Procurement Responsable | Mar 2019 - May 2020.
                </Text>
              ) : (
                <Text>H&H | Responsable de Compras | Mar 2019 - May 2020.</Text>
              )}
            </Text>
            <Text
              fontSize="1.4rem"
              color={isDark ? "white" : "black"}
              mb="3rem"
            >
              {english ? (
                <Text>
                  Purchase and distribution of various supplies to the different
                  lodges / fields. Search and development of new suppliers.
                  Coordination of logistics team to ensure deliveries in the
                  schedule time. Development of purchasing procedure.
                </Text>
              ) : (
                <Text>
                  Compra y distribución de insumos varios a las diferentes
                  hosterías / campos. Búsqueda y desarrollo de nuevos
                  proveedores. Manejo y coordinación de equipo logístico para
                  asegurar entregas en tiempo y forma. Desarrollo de
                  procedimiento de compras.
                </Text>
              )}
            </Text>
          </li>
          <li>
            <Text
              fontSize="1.5rem"
              mb="0.7rem"
              mt="1rem"
              fontWeight="bold"
              color="yellow.500"
            >
              {english ? (
                <Text>Arcor | Corporate Buyer | Nov 2013 - Jan 2018</Text>
              ) : (
                <Text>Arcor | Comprador Corporativo | Nov 2013 - Ene 2018</Text>
              )}
            </Text>
            <Text
              fontSize="1.4rem"
              color={isDark ? "white" : "black"}
              mb="3rem"
            >
              {english ? (
                <Text>
                  Negotiation of corporate agreements with qualified suppliers
                  to supply the different factories belonging to the group.
                  Purchases for new projects from the corporate engineering area
                  (Civil works, thermo-mechanical, electromechanical, industrial
                  equipment, forklifts, instrumentation, etc). Cost structure
                  analysis and negotiation of commercial conditions. Generation,
                  release and monitoring of purchase orders.
                </Text>
              ) : (
                <Text>
                  Negociación de acuerdos corporativos con proveedores
                  calificados para abastecer a las diferentes fabricas
                  pertenecientes al grupo. Compras para nuevos proyectos
                  provenientes del sector de ingeniería corporativa (Obras
                  civiles, termo mecánicas, electromecánicas, equipamiento
                  industrial, autoelevadores, instrumentación, etc). Análisis de
                  estructura de costos y negociación de condiciones comerciales.
                  Generación, liberación y seguimiento de órdenes de compra.
                </Text>
              )}
            </Text>
          </li>
          <li>
            <Text
              fontSize="1.5rem"
              mb="0.7rem"
              mt="1rem"
              fontWeight="bold"
              color="yellow.500"
            >
              {english ? (
                <Text>Renault | Productive Buyer | Feb 2011 - Mar 2013</Text>
              ) : (
                <Text>
                  Renault | Comprador Productivo | Feb 2011 - Mar 2013
                </Text>
              )}
            </Text>
            <Text
              fontSize="1.4rem"
              color={isDark ? "white" : "black"}
              mb="3rem"
            >
              {english ? (
                <Text>
                  Raw material purchases. Analysis of the production process of
                  the supplier, detection of inefficiencies, suggestion of
                  improvements, costs reduction. Molds and tooling purchases.
                  Generation of price variants in SAP. Import of tooling from
                  Exterior
                </Text>
              ) : (
                <Text>
                  Compras de materia prima. Análisis del proceso de producción
                  del proveedor, detección de ineficiencias, sugerencia de
                  mejoras, reducción de costos. Compras de moldes y
                  herramentales. Generacion de variantes de precios en SAP.
                  Importación de herramentales del exterior
                </Text>
              )}
            </Text>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default WorkExperience;
