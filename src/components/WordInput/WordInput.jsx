import React from 'react';
import { Input } from '@chakra-ui/react';
import { getAppState, handleWordInput } from '../../actions/actions';

function WordInput() {
  const { inputDisabled } = getAppState();

  return (
    <Input
      w="15vw"
      bg="white"
      onChange={handleWordInput}
      disabled={inputDisabled}
    />
  );
}

export default WordInput;
