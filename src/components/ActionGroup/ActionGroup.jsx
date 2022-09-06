import React from 'react';
import { Stack } from '@chakra-ui/react';
import WordInput from '../WordInput/WordInput';

function ActionGroup() {
  return (
    <Stack direction="row" bg="blackAlpha.100" w="100%">
      <WordInput />
    </Stack>
  );
}

export default ActionGroup;
