import React from 'react';
import { Center, Stack } from '@chakra-ui/react';
import Header from './components/Header/Header';
import WordList from './components/WordList/WordList';
import './App.css';

function App() {
  return (
    <Center h="100vh" bg="gray.800">
      <Stack spacing="3" alignItems="start" w="40vw">
        <Header />
        <WordList />
      </Stack>
    </Center>
  );
}

export default App;
