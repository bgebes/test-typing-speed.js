import { useSelector } from 'react-redux';
import { store } from '../redux/store';

export const getAppState = () => useSelector((state) => state.app);
export const getCounterState = () => useSelector((state) => state.counter);
export const getResultState = () => useSelector((state) => state.result);

export const getAppStateByStore = () => store.getState().app;
export const getCounterStateByStore = () => store.getState().counter;
export const getResultStateByStore = () => store.getState().result;
