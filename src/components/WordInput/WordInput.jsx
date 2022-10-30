import React from 'react';
import { Input } from '@chakra-ui/react';
import { getAppState, handleWordInput } from '../../actions/actions';

function WordInput() {
  const { inputValue, inputDisabled } = getAppState();

  return (
    <Input
      w="15vw"
      bg="white"
      value={inputValue}
      disabled={inputDisabled}
      onChange={handleWordInput}
    />
  );
}

export default WordInput;
