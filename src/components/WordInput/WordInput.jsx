import React from 'react';
import { startCountdown } from '../../utils/utils';
import { Input } from '@chakra-ui/react';

function WordInput() {
  return <Input w="15vw" bg="white" onChange={startCountdown} />;
}

export default WordInput;
