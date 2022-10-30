import React from 'react';
import { Flex } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import { restartApp } from '../../utils/utils';

function RestartButton() {
  return (
    <Flex
      fontSize="xl"
      bg="green.500"
      color="white"
      p="3"
      rounded="5"
      onClick={restartApp}
    >
      <RepeatIcon />
    </Flex>
  );
}

export default RestartButton;
