import { RepeatIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import React from 'react';

function RestartButton() {
  return (
    <Flex fontSize="xl" bg="green.500" color="white" p="3" rounded="5">
      <RepeatIcon />
    </Flex>
  );
}

export default RestartButton;
