import React from 'react';
import SecondsToShow from 'seconds-to-show';
import { Text } from '@chakra-ui/react';
import { getCounterState } from '../../actions/actions';

function TimeCounter() {
  const { current } = getCounterState();

  return (
    <Text
      fontSize="xl"
      bg="blue.400"
      color="white"
      px="2.5"
      py="1.5"
      rounded="5"
    >
      {SecondsToShow(current)}
    </Text>
  );
}

export default TimeCounter;
