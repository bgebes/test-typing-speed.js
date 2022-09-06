import React from 'react';
import { Spacer, Stack } from '@chakra-ui/react';
import WordInput from '../WordInput/WordInput';
import TimeCounter from '../TimeCounter/TimeCounter';
import RestartButton from '../RestartButton/RestartButton';

function ActionGroup() {
  return (
    <Stack direction="row" align="center" bg="blackAlpha.100" w="100%" py={1}>
      <Spacer />
      <WordInput />
      <TimeCounter />
      <RestartButton />
      <Spacer />
    </Stack>
  );
}

export default ActionGroup;
