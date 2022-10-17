import { Text, WrapItem } from '@chakra-ui/react';
import React from 'react';

function Word({ data }) {
  const stateClasses = {
    current: { bg: 'gray.500' },
    correct: { bg: 'green.500' },
    fail: { bg: 'red.500' },
  };

  return (
    <WrapItem {...stateClasses} p="0.5" rounded="1">
      <Text fontSize="2xl">{data}</Text>
    </WrapItem>
  );
}

export default Word;
