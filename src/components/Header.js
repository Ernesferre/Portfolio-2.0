import { HStack, Link, Spacer } from '@chakra-ui/react'
import React from 'react'
import { useColorMode } from "@chakra-ui/color-mode";
import { Image, Box, VStack, Heading, Text, Grid, IconButton } from "@chakra-ui/react"
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FaSun , FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = ({toggleColorMode, isDark}) => {

    
    console.log(isDark)


    return (
        <HStack mt={0} mb="3" mr="6" p={4} spacing={5}>
            
            <IconButton
                ml="4"
                icon={isDark ? <FaSun /> : <FaMoon /> }
                isRound="true"
                onClick={ toggleColorMode }
                color={isDark ? 'black' : "yellow.600"}
                alignSelf="flex-start"
                bg={isDark ? "yellow.600" : "black"}
                _hover={{
                    boxShadow: "dark-lg"
                  }}
                
                >       
            </IconButton>
            
            <Spacer> </Spacer>
            
            <Link
                isRound="true"
                // icon={<FaGithub />}
                ml="6"
                fontSize="x-large"
                href="https://github.com/Ernesferre"
                isExternal
                
            >
                <FaGithub
                    color="yellow.600"
                    _hover={{
                        boxShadow: "dark-lg"
                      }}
                    

                />
            </Link>

            <Link
                isRound="true"
                // icon={<FaGithub />}
                ml="6"
                fontSize="x-large"
                href="https://www.linkedin.com/in/ernes-ferreyra/"
                isExternal
            >
                <FaLinkedin />
            </Link>

            {/* <IconButton
                isRound="true"
                icon={<FaLinkedin />}
                ml="2"
            >
            </IconButton> */}



       

            
        </HStack>
    )
}

export default Header
