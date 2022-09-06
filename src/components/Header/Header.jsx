import React from 'react';
import { Container, HStack, Select, Text } from '@chakra-ui/react';

function Header() {
  return (
    <Container>
      <HStack>
        <Select variant="outline" bg="green.500" color="white" w="10vw">
          <option value="turkish" style={{ backgroundColor: '#38a169' }}>
            Turkish
          </option>
          <option value="english" style={{ backgroundColor: '#38a169' }}>
            English
          </option>
        </Select>
        <Text>Change testing language</Text>
      </HStack>
    </Container>
  );
}

export default Header;
