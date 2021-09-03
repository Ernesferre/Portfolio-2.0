import { Box, Heading, HStack, Flex } from '@chakra-ui/react'
import React from 'react'
import Card from '../components/Card'
import { Proyectos } from './Proyectos'
import Zoom from 'react-reveal/Zoom';

const Portfolio = (props) => {
    
    
    console.log(Proyectos[0].descripcion)
    
    const {isDark} = props

    console.log(isDark)
    
    
    return (
        <Zoom>
        <Box
            textAlign="center"
            mt="4rem"
            // m={2}
            bg={props.isDark ? "black" : "white"}
            id="portfolio"
            
        >
            {/* <Heading
                color="black"
                mb={6}
            >
                Portfolio
            </Heading> */}

            
                <Flex 
                    flexWrap="wrap" 
                    mt="3rem"
                    justifyContent="center"
                >   
                        {Proyectos.map((item) =>  
                        <Flex
                            
                        >
                            <Zoom>
                            <Card 
                                isDark={isDark}
                                key={item.id} {...item}
                            />
                            </Zoom>
                        </Flex>
                        )}
                </Flex>
            
        </Box>
        </Zoom>
    )
}

export default Portfolio
