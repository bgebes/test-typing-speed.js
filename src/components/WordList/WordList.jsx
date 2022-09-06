import { Box, Container, SimpleGrid, Wrap } from '@chakra-ui/react';
import React from 'react';
import Word from '../Word/Word';

function WordList() {
  const mock = [
    'diğer',
    'hayat',
    'etmek',
    'ses',
    'şimdi',
    'ile',
    'üzerinde',
    'sonuç',
    'değil',
    'her',
    'söz',
    'göz',
    'ise',
    'dönmek',
    'iç',
    'baş',
    'insan',
    'bugün',
    'geçmek',
    'yaşamak',
  ];

  return (
    <Box bg="white">
      <Wrap spacing="3" p="3">
        {mock.map((m, i) => (
          <Word data={m} key={i} />
        ))}
      </Wrap>
      {/* <SimpleGrid columns={10} spacing={4} p="5">
        {mock.map((m, i) => (
          <Word data={m} key={i} />
        ))}
      </SimpleGrid> */}
    </Box>
  );
}

export default WordList;
