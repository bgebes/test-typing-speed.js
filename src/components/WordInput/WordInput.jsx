import React from 'react';
import { Input } from '@chakra-ui/react';
import { handleWordInput } from '../../actions/actions';

function WordInput() {
  return <Input w="15vw" bg="white" onChange={handleWordInput} />;
}

export default WordInput;
