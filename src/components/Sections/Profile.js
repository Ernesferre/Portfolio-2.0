import {
  Box,
  Container,
  Heading,
  HStack,
  Grid,
  GridItem,
  Image,
  Text,
  Flex,
  Spacer,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import React from "react";
import Ernesto from "../../assets/Ernesto.jpg";
import Fade from "react-reveal/Fade";
import GoBack from "../GoBack";
import Title from "../Title";
import { StoreContext } from "../Context/StoreContext";
import { useContext } from "react";

const Profile = ({ isDark }) => {
  const { english } = useContext(StoreContext);
  console.log("Desde Profile:", english);

  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <GoBack isDark={isDark} />
        </GridItem>

        <GridItem colSpan={1} colStart={[3]} colEnd={[4]} textAlign="center">
          <Title title={english ? "Profile" : "Perfil"} />
        </GridItem>
      </Grid>

      <Box
        mx="auto"
        bg={isDark ? "black" : "white"}
        mt="2rem"
        id="profile"
        w="90%"
      >
        <SimpleGrid columns={[1, 1, 2]} spacing={3}>
          <Center>
            <Fade left>
              <Box alignItems="center" w="100%">
                <Center>
                  <Image
                    alignItems="center"
                    width="300px"
                    alignItems="center"
                    isRound="true"
                    src={Ernesto}
                    alt="Ernesto"
                    boxShadow="dark-lg"
                    display="inline"
                    mb={6}
                    borderRadius="full"
                    _hover={{
                      boxShadow: "dark-lg",
                    }}
                  />
                </Center>
              </Box>
            </Fade>
          </Center>

          <Fade right>
            <Box>
              <Text
                textAlign="left"
                fontSize={23}
                ml={2}
                mr={3}
                fontFamily="Roboto"
                fontWeight="thin"
                letterSpacing={0}
                p={5}
                color={isDark ? "white" : "black"}
              >
                {english ? (
                  <Text>
                    Hi there ! my name is Ernest, I am a self-taught programmer,
                    passionate about technology. I am a deeply committed person
                    about the things I decide to carry out and with the people
                    who I work for.
                    <br></br>
                    Nowadays, my main wish is to work in a place where I can
                    apply my knowledge but at the same time be the most
                    productive I could be adding up value to the team work.
                    <br></br>I have a very high work ethic and I like to
                    maintain a good work environment where respect and good
                    communication are essentials values of the team.
                    <br></br>
                    My greatest desire is to seek personal and professional
                    growth by learning new technologies and new ways of working.
                  </Text>
                ) : (
                  <Text>
                    Hola ! Mi nombre es Ernesto, soy un programador autodidacta
                    apasionado por la tecnología y por todo lo que ésta puede
                    solucionar. Soy una persona profundamente comprometida con
                    aquellas cosas que me propongo realizar y con la gente con
                    la que me toca trabajar.
                    <br></br>
                    Actualmente, mi principal objetivo es poder trabajar en una
                    empresa donde pueda aplicar mis conocimientos pero, al mismo
                    tiempo, ser lo más productivo posible agregando valor al
                    equipo de trabajo.
                    <br></br>
                    Soy una persona con ética de trabajo y me gusta mantener un
                    buen clima laboral donde el respeto y la buena comunicación
                    sean valores esenciales.
                    <br></br>
                    Mi mayor deseo es buscar el crecimiento personal y
                    profesional continuo, aprendiendo nuevas tecnologías y
                    formas de trabajo.
                  </Text>
                )}
              </Text>
            </Box>
          </Fade>
        </SimpleGrid>

        <HStack></HStack>
      </Box>
    </>
  );
};

export default Profile;
