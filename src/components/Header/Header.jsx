import React from 'react';
import { Select, Stack, Text } from '@chakra-ui/react';

function Header() {
  return (
    <Stack direction="row" align="center" spacing="1vw">
      <Select
        variant="outline"
        bg="green.500"
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
      <Text color="white">Change testing language</Text>
    </Stack>
  );
}

export default Header;
