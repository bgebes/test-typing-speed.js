import { Text } from '@chakra-ui/react';
import React from 'react';

function TimeCounter() {
  return (
    <Text
      fontSize="xl"
      bg="blue.400"
      color="white"
      px="2.5"
      py="1.5"
      rounded="5"
    >
      1:00
    </Text>
  );
}

export default TimeCounter;
