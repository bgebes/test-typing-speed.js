import axios from 'axios';
import { store } from '../redux/store';
import { useSelector } from 'react-redux';
import { startCountdown } from '../utils/utils';
import { match, matchKeyStrokes } from '../redux/Result/ResultSlice';
import {
  setLang,
  focusNextWord,
  nextPage,
  wordData,
  setFinished,
  changeInputValue,
} from '../redux/App/AppSlice';
import { restart } from '../redux/Counter/CounterSlice';

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
  store.dispatch(changeInputValue({ value }));

  if (value === ' ') {
    store.dispatch(changeInputValue({ value: '' }));
  } else if (value.includes(' ')) {
    const input = value.trim();

    checkMatch(input);
    checkKeyStrokes(input);
    store.dispatch(changeInputValue({ value: '' }));

    nextWord();
  }

  startCountdown();
};

export const checkMatch = (input) => {
  const { focused } = getAppStateByStore().words;

  if (input == focused) {
    store.dispatch(match({ type: 'correct', word: input }));
  } else {
    store.dispatch(match({ type: 'wrong', word: focused }));
  }
};

export const checkKeyStrokes = (input) => {
  const temp = { correct: 0, wrong: 0, total: 0 };

  const { focused } = getAppStateByStore().words;

  for (let i = 0; i < input.length; i++) {
    if (focused[i] === undefined) {
      /* That's not enough index for focused so finish scan. */
      break;
    }

    if (input[i] === focused[i]) {
      temp.correct++;
    } else {
      temp.wrong++;
    }

    temp.total++;
  }

  store.dispatch(matchKeyStrokes(temp));
};

export const nextWord = () => {
  const { words } = getAppStateByStore();
  const focusedIndex = words.shown.indexOf(words.focused);

  if (words.shown.length == 0) {
    store.dispatch(setFinished({ finished: true }));
    return;
  }

  if (focusedIndex == words.shown.length - 1) {
    store.dispatch(nextPage());
  } else {
    store.dispatch(focusNextWord());
  }
};

export const handleSelectLang = (event) => {
  const { value } = event.target;

  store.dispatch(setLang({ lang: value }));
  store.dispatch(restart());
  clearInterval(getCounterStateByStore().interval);
  store.dispatch(setFinished({ finished: false }));
};
