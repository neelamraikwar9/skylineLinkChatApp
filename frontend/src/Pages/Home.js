import React from 'react'
import { Container, Box, Text } from '@chakra-ui/react'

const Home = () => {
  return (
    <Container maxW='xl' centerContent>
    <Box d="flex" justifyContent="center" padding={3} bg={"white"} w="100%" m="40px 0 15px 0" borderRadius="1g" borderWidth="1px">
      <Text fontSize="4xl" fontFamily={'cursive'} color="black">Skyline Link</Text>
    </Box>
      
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
      
      
      </Box>
    </Container>
  );
}

export default Home