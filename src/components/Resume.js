import { Box, Link, Image, Container, Text, Center } from '@chakra-ui/react'
import cv from '../assets/cv.PNG'
import React from 'react'
import Bounce from 'react-reveal/Bounce';

const Resume = () => {
    return (
        <Bounce top>
        <Container
            placeItems="center"
            mt="4rem"
            // mb={4}
            id="resume"
            
        >

            <Text
                color="grey.200"
                // mb={6}
                textAlign="center"
            >
                Click image to open in big screen
            </Text>

            <Link
                href="https://drive.google.com/file/d/1RpORj2yogxKt6sgouwdo1ORyxk4fWOCo/view?usp=sharing"
                isExternal
            >
                <Center>
                <Image
                    src={cv}
                    borderRadius={7}
                >

                </Image>
                </Center>
            
            </Link>
        </Container>
        </Bounce>
    )
}

export default Resume
