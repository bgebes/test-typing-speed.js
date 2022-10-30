import { Text, Stack, Box, Center, Divider } from '@chakra-ui/react';
import React from 'react';
import { getAppState, getResultState } from '../../actions/actions';

function Result() {
  const { wordsPerMinute, keyStrokes, accuracy, words } = getResultState();
  const { appFinished, lang, langTitles } = getAppState();

  if (!appFinished) return;

  return (
    <Stack direction="column" rounded="4" w="100%" bg="white">
      <Box bg="blue.400" p="4" roundedTop="4">
        <Text color="white" fontWeight="bold">
          {langTitles[lang].header}
        </Text>
      </Box>
      <Box>
        <Stack direction="column">
          <Center>
            <Text color="green.700" fontSize="5xl" fontWeight="bold">
              {wordsPerMinute} {langTitles[lang].wpmUnit}
            </Text>
          </Center>
          <Center>
            <Text>({langTitles[lang].wpmSubTitle})</Text>
          </Center>
        </Stack>
      </Box>
      <Divider />
      <Stack direction="row" justify="space-between" fontSize="lg" px="28">
        <Text>{langTitles[lang].keyStrokes}</Text>
        <Stack direction="row">
          <Stack direction="row" fontSize="sm">
            <Text>(</Text>
            <Text color="green.400">{keyStrokes.correct}</Text>
            <Text>| </Text>
            <Text color="red.400">{keyStrokes.wrong}</Text>
            <Text>)</Text>
          </Stack>
          <Text>{keyStrokes.total}</Text>
        </Stack>
      </Stack>
      <Divider />
      <Stack direction="row" justify="space-between" fontSize="lg" px="28">
        <Text>{langTitles[lang].accuracy}</Text>
        <Text fontWeight="bold">{accuracy}%</Text>
      </Stack>
      <Divider />
      <Stack direction="row" justify="space-between" fontSize="lg" px="28">
        <Text>{langTitles[lang].correctWords}</Text>
        <Text color="green.400" fontWeight="bold">
          {words.correct.length}
        </Text>
      </Stack>
      <Divider />
      <Stack
        direction="row"
        justify="space-between"
        fontSize="lg"
        px="28"
        pb="4"
      >
        <Text>{langTitles[lang].wrongWords}</Text>
        <Text color="red.400" fontWeight="bold">
          {words.wrong.length}
        </Text>
      </Stack>
    </Stack>
  );
}

export default Result;
