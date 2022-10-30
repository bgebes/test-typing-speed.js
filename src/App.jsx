import React from 'react';
import { Center, Link, Stack, Text } from '@chakra-ui/react';
import Header from './components/Header/Header';
import WordList from './components/WordList/WordList';
import ActionGroup from './components/ActionGroup/ActionGroup';
import Result from './components/Result/Result';
import './App.css';

function App() {
  return (
    <Center h="100vh" bg="gray.800">
      <Stack spacing="3" alignItems="start" w="40vw">
        <Header />
        <WordList />
        <ActionGroup />
        <Text w="100%" align="center" color="white">
          Made by{' '}
          <Link color="blue.400" href="https://github.com/bgebes">
            bgebes
          </Link>
        </Text>
        <Result />
      </Stack>
    </Center>
  );
}

export default App;
