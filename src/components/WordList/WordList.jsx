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
    <Box bg="white" rounded={5} boxShadow="dark-lg">
      <Wrap spacing="1" p="5">
        {mock.map((m, i) => (
          <Word data={m} key={i} />
        ))}
      </Wrap>
    </Box>
  );
}

export default WordList;
