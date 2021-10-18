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
          letterSpacing={1}
        >
          {english ? (
            <Text>Main Education</Text>
          ) : (
            <Text>Educacion Principal</Text>
          )}
        </Heading>
        <ul>
          <li mb="6rem">
            <Text
              fontSize="1rem"
              mb="0.7rem"
              color={isDark ? "white" : "black"}
            >
              <Text
                fontWeight="medium"
                fontSize={["1.4rem", "1.4rem"]}
                fontFamily="Roboto"
              >
                {english ? (
                  <Text>Industrial Engineering</Text>
                ) : (
                  <Text>Ingeniería Industrial</Text>
                )}
              </Text>
              <Text
                mb="0.3rem"
                fontFamily="Roboto"
                fontSize="1.4rem"
                fontWeight="thin"
              >
                {english ? (
                  <Text>Catholic University of Cordoba</Text>
                ) : (
                  <Text>Universidad Católica de Cordoba</Text>
                )}
              </Text>
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
              {english ? (
                <Text fontWeight="medium" fontSize={["1.2rem", "1.5rem"]}>
                  MBA (Partial)
                </Text>
              ) : (
                <Text fontWeight="medium" fontSize={["1.2rem", "1.5rem"]}>
                  MBA (Parcial)
                </Text>
              )}

              <Text
                mb="0.3rem"
                fontFamily="Roboto"
                fontSize="1.4rem"
                fontWeight="thin"
              >
                {english ? (
                  <Text>University Siglo 21</Text>
                ) : (
                  <Text>Universidad Siglo 21 </Text>
                )}
              </Text>
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
              {english ? (
                <Text fontWeight="medium" fontSize={["1.2rem", "1.5rem"]}>
                  Bachelor in Economics and Management Organizations
                </Text>
              ) : (
                <Text fontWeight="medium" fontSize={["1.2rem", "1.5rem"]}>
                  Bachiller en Economia y Gestión de las Organizaciones
                </Text>
              )}

              <Text
                mb="0.3rem"
                fontFamily="Roboto"
                fontSize="1.4rem"
                fontWeight="thin"
              >
                {english ? (
                  <Text>Lasalle School</Text>
                ) : (
                  <Text>Colegio Lasalle </Text>
                )}
              </Text>

              <Text color="gray.500" mb="2rem">
                {" "}
                {english ? (
                  <Text>Jan 1996 - Dec 2001</Text>
                ) : (
                  <Text>Ene 1996 - Dic 2001 </Text>
                )}
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
          letterSpacing={1}
        >
          {english ? (
            <Text>Training Courses</Text>
          ) : (
            <Text>Cursos de Formacion </Text>
          )}
        </Heading>
        <ul>
          <li mb="6rem">
            <Text color={isDark ? "white" : "black"}>
              <Text fontWeight="medium" fontSize="1.5rem">
                {" "}
                Alkemy{" "}
              </Text>
              <Text
                mb="0.3rem"
                fontFamily="Roboto"
                fontSize="1.4rem"
                fontWeight="thin"
              >
                {english ? (
                  <Text>
                    React Js Acceleration | Agile Methodologies (Jira) |
                    Simulation of a project for ONG | Git | BitBucket | Teamwork
                  </Text>
                ) : (
                  <Text>
                    Aceleracion React Js | Metodologias Agiles (Jira) |
                    Simulacion de un proyecto integral para ONG | Git |
                    BitBucket | Trabajo en Equipo
                  </Text>
                )}
              </Text>
            </Text>
            <Text color="gray.500" mb="2rem">
              {english ? (
                <Text>Apr 2021 - Jul 2021</Text>
              ) : (
                <Text>Abr 2021 - Jul 2021</Text>
              )}
            </Text>
          </li>

          <li mb="6rem">
            <Text
              fontSize="1rem"
              mt="0.5rem"
              color={isDark ? "white" : "black"}
            >
              <Text fontWeight="medium" fontSize="1.5rem">
                {" "}
                Coderhouse{" "}
              </Text>
              <Text
                mb="0.3rem"
                fontFamily="Roboto"
                fontSize="1.4rem"
                fontWeight="thin"
              >
                {" "}
                React Js{" "}
              </Text>
            </Text>
            <Text color="gray.500" mb="2rem">
              {english ? (
                <Text>Nov 2020 - Jan 2021</Text>
              ) : (
                <Text> Nov 2020 - Ene 2021 </Text>
              )}
            </Text>
          </li>

          <li mb="6rem">
            <Text
              fontSize="1rem"
              mt="0.5rem"
              color={isDark ? "white" : "black"}
            >
              <Text fontWeight="medium" fontSize="1.5rem">
                {" "}
                Coderhouse{" "}
              </Text>
              <Text
                mb="0.3rem"
                fontFamily="Roboto"
                fontSize="1.4rem"
                fontWeight="thin"
              >
                {" "}
                Javascript{" "}
              </Text>
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
              <Text fontWeight="medium" fontSize="1.5rem">
                {" "}
                Udemy{" "}
              </Text>
              <Text
                mb="0.3rem"
                fontFamily="Roboto"
                fontSize="1.4rem"
                fontWeight="thin"
              >
                {" "}
                - React: De cero a experto ( Hooks y MERN ) de Fernando Herrera{" "}
              </Text>
              <Text
                mb="0.3rem"
                fontFamily="Roboto"
                fontSize="1.4rem"
                fontWeight="thin"
              >
                - React: The Complete Guide (incl Hooks, React Router, Redux) de
                Maximilian Schwarzmuller
              </Text>
            </Text>
            <Text color="gray.500" mb="2rem">
              {english ? (
                <Text>Feb 2021 - Present</Text>
              ) : (
                <Text> Feb 2021 - Actualidad </Text>
              )}
            </Text>
          </li>

          <li mb="6rem">
            <Text
              fontSize="1rem"
              mt="0.5rem"
              color={isDark ? "white" : "black"}
            >
              <Text fontWeight="medium" fontSize="1.5rem">
                {" "}
                Udemy{" "}
              </Text>
              <Text
                mb="0.3rem"
                fontFamily="Roboto"
                fontSize="1.4rem"
                fontWeight="thin"
              >
                {" "}
                JavaScript Moderno Guía Definitiva (Juan De La Torre ){" "}
              </Text>
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
