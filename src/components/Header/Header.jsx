import React from 'react';
import { Select, Stack, Text } from '@chakra-ui/react';

function Header() {
  return (
    <Select
      variant="outline"
      bg="blue.400"
      color="white"
      w="10vw"
      border="gray"
    >
      <option value="turkish" style={{ backgroundColor: '#38a169' }}>
        Turkish
      </option>
      <option value="english" style={{ backgroundColor: '#38a169' }}>
        English
      </option>
    </Select>
  );
}

export default Header;
