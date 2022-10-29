import React from 'react';
import Word from '../Word/Word';
import { Box, Wrap } from '@chakra-ui/react';
import { getAppState, runGetWordData } from '../../actions/actions';
import { useEffect } from 'react';

function WordList() {
  useEffect(() => {
    runGetWordData();
  }, []);

  const { shown } = getAppState().words;

  return (
    <Box bg="white" rounded={5} boxShadow="dark-lg">
      <Wrap spacing="1" p="5">
        {shown.map((m, i) => (
          <Word data={m} key={i} />
        ))}
      </Wrap>
    </Box>
  );
}

export default WordList;
