import axios from 'axios';
import { store } from '../redux/store';
import { useSelector } from 'react-redux';
import { startCountdown } from '../utils/utils';
import { correctMatch, wrongMatch } from '../redux/Result/ResultSlice';
import {
  setLang,
  focusNextWord,
  nextPage,
  wordData,
} from '../redux/App/AppSlice';

export const getAppState = () => useSelector((state) => state.app);
export const getCounterState = () => useSelector((state) => state.counter);
export const getResultState = () => useSelector((state) => state.result);

export const getAppStateByStore = () => store.getState().app;
export const getCounterStateByStore = () => store.getState().counter;
export const getResultStateByStore = () => store.getState().result;

export const getWordData = async () => {
  const { lang } = getAppStateByStore();

  const handle = await axios(`${import.meta.env.VITE_API_BASE}/${lang}`);

  return handle.data;
};

export const runGetWordData = () => {
  store.dispatch(wordData());
};

export const handleWordInput = (event) => {
  let { value } = event.target;

  if (value === ' ') {
    event.target.value = '';
  } else if (value.includes(' ')) {
    const input = value.trim();

    checkMatch(input);
    event.target.value = '';

    nextWord();
  }

  startCountdown();
};

export const checkMatch = (input) => {
  const { focused } = getAppStateByStore().words;

  if (input == focused) {
    store.dispatch(correctMatch({ word: input }));
  } else {
    store.dispatch(wrongMatch({ word: focused }));
  }
};

export const nextWord = () => {
  const { words } = getAppStateByStore();
  const focusedIndex = words.shown.indexOf(words.focused);

  if (focusedIndex == words.shown.length - 1) {
    store.dispatch(nextPage());
  } else {
    store.dispatch(focusNextWord());
  }
};

export const handleSelectLang = (event) => {
  const { value } = event.target;

  store.dispatch(setLang({ lang: value }));
};
