import React from 'react';
import { Text, WrapItem } from '@chakra-ui/react';
import { getAppState, getResultState } from '../../actions/actions';

function Word({ data }) {
  const { focused } = getAppState().words;
  const { words } = getResultState();

  const stateClasses = {
    current: { bg: 'gray.300' },
    correct: { bg: 'green.300' },
    wrong: { bg: 'red.300' },
  };

  let stateClass;

  if (data == focused) {
    stateClass = stateClasses.current;
  } else if (words.correct.includes(data)) {
    stateClass = stateClasses.correct;
  } else if (words.wrong.includes(data)) {
    stateClass = stateClasses.wrong;
  }

  return (
    <WrapItem {...stateClass} py="1" px="2" rounded="4">
      <Text fontSize="2xl">{data}</Text>
    </WrapItem>
  );
}

export default Word;
