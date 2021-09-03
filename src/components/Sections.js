import React from 'react'
import { Box, Button, SimpleGrid} from "@chakra-ui/react"
import { Link } from "react-router-dom"
// import { Link } from "react-router-dom"
import Fade from 'react-reveal/Fade';
// import { Link } from "react-scroll"


const Sections = (props) => {

    console.log(props.isDark)

    return (
        <Fade>
        <Box
            alignSelf="center"
            bg={props.isDark ? "black" : "white"}
            textAlign="center"
            fontFamily="Amatic SC"
            fontWeight="bold"
            
            
        >
            <SimpleGrid
                bg={props.isDark ? "black" : "white"}
                columns={{ sm: 2, md: 2, lg: 4 }}
                spacing="8"
                // p="10"
                textAlign="center"
                rounded="lg"
                color="black"
                mt={8}
                >

                <Link 
                    to="/profile"
                    
                    // smooth={true}
                    // duration={1000}
                >
                    <Button
                        boxShadow="md" 
                        width="250px"
                        p="6" 
                        rounded="md" 
                        bg="yellow.600" 
                        color="black" 
                        letterSpacing="10px" 
                        textDecorationLine="none" 
                        _hover={{textDecoration: "none"}}
                        boxShadow="2xl"
                        href="profile"
                        _hover={{
                            boxShadow: "dark-lg"
                          }}
                    >  
                    Profile
                    </Button>
                </Link>

                <Link 
                    to="/skills"
                >
                    <Button
                        boxShadow="md" 
                        width="250px"
                        p="6" 
                        rounded="md" 
                        bg="yellow.600" 
                        color="black" 
                        letterSpacing="10px" 
                        textDecorationLine="none" 
                        _hover={{textDecoration: "none"}}
                        boxShadow="2xl"
                        _hover={{
                            boxShadow: "dark-lg"
                          }}
                    >  
                    Skills
                    </Button>
                </Link>

                <Link 
                    to="/portfolio"
                >
                    <Button
                        boxShadow="md" 
                        width="250px"
                        p="6" 
                        rounded="md" 
                        bg="yellow.600" 
                        color="black" 
                        letterSpacing="10px" 
                        textDecorationLine="none" 
                        _hover={{textDecoration: "none"}}
                        boxShadow="2xl"
                        _hover={{
                            boxShadow: "dark-lg"
                          }}
                    >  
                    Portfolio
                    </Button>
                </Link>

                <Link 
                    to="/resume"
                >
                    <Button
                        boxShadow="md" 
                        width="250px"
                        p="6" 
                        rounded="md" 
                        bg="yellow.600" 
                        color="black" 
                        letterSpacing="10px" 
                        textDecorationLine="none" 
                        _hover={{textDecoration: "none"}}
                        boxShadow="2xl"
                        _hover={{
                            boxShadow: "dark-lg"
                          }}
                    >  
                    Resume
                    </Button>
                </Link>


                

                

                
            
            

            </SimpleGrid>
            
        </Box>
        </Fade>
    )
}

export default Sections
