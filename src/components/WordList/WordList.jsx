import React from 'react';
import Word from '../Word/Word';
import { Box, Wrap } from '@chakra-ui/react';
import { getAppState, runGetWordData } from '../../actions/actions';
import { useEffect } from 'react';

function WordList() {
  const { lang, words } = getAppState();

  useEffect(() => {
    runGetWordData();
  }, [lang]);

  return (
    <Box bg="white" rounded={5} boxShadow="dark-lg">
      <Wrap spacing="1" p="5">
        {words.shown.map((v, i) => (
          <Word data={v} key={i} />
        ))}
      </Wrap>
    </Box>
  );
}

export default WordList;
