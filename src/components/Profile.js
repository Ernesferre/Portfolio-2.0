import { Box, Container, Heading, HStack, Image, Text, Flex, Spacer, SimpleGrid, Center} from '@chakra-ui/react'
import React from 'react'
import Ernesto from '../assets/Ernesto.jpg'
import Fade from 'react-reveal/Fade';

const Profile = (props) => {
    return (
        <Box
            textAlign="center"
            bg={props.isDark ? "black" : "white"}
            mt="4rem"
            id="profile"
            w="100%"
            
            
        >

            <SimpleGrid 
                columns={[1, 1, 2]}
                spacing={10}
                
            >
                
                <Center>
                <Fade left>
                <Box
                    alignItems="center"
                    w="100%"
                    
                >
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
                        // border="1px"   
                        // borderColor="yellow.600"
                        borderRadius="full"
                        _hover={{
                            boxShadow: "dark-lg"
                          }}
                   
                        
                    />
                    </Center>
                    
                </Box>
                </Fade>
                </Center>
                

                
               
                <Fade right>
                <Box
               
                >
                    <Text
                        textAlign="left"
                        fontSize={23}
                        mr={3}
                        fontFamily="Roboto"
                        fontWeight="thin"
                        letterSpacing={0}
                        p={5}
                        color={props.isDark ? "white" : "black"}
                        
                        
                    >
                        I am a self-taught programmer, passionate about technology. I am a deeply committed person about the things I decide to carry out and with the people who I work for.
                        <br></br>
                        Nowadays, my main wish is to work in a place where I can apply my knowledge but at the same time be the most productive I could be adding up value to the team work.
                        <br></br>
                        I have a very high work ethic and I like to maintain a good work environment where respect and good communication are essentials values of the team.
                        <br></br>
                        My greatest desire is to seek personal and professional growth by learning new technologies and new ways of working.

                    </Text>
                </Box>
                </Fade>

            </SimpleGrid>

            <HStack>

            </HStack>
        </Box>
    )
}

export default Profile