import axios from 'axios';
import { store } from '../redux/store';
import { useSelector } from 'react-redux';
import { startCountdown } from '../utils/utils';
import { wordData } from '../redux/App/AppSlice';

export const getAppState = () => useSelector((state) => state.app);
export const getCounterState = () => useSelector((state) => state.counter);
export const getResultState = () => useSelector((state) => state.result);

export const getAppStateByStore = () => store.getState().app;
export const getCounterStateByStore = () => store.getState().counter;
export const getResultStateByStore = () => store.getState().result;

export const handleWordInput = (event) => {
  let { value } = event.target;

  if (value.includes(' ')) {
    const input = value.trim();

    /*
        check(value.trim());
    */

    event.target.value = '';
  }

  startCountdown();
};

export const getWordData = async () => {
  const handle = await axios(import.meta.env.VITE_API_BASE);

  return handle.data;
};

export const runGetWordData = () => {
  store.dispatch(wordData());
};
