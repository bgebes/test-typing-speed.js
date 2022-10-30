import { getCounterStateByStore, runGetWordData } from '../actions/actions';
import { setFinished, setInputDisabled } from '../redux/App/AppSlice';
import {
  decrement,
  start,
  restart,
  setStatus,
} from '../redux/Counter/CounterSlice';
import { store } from '../redux/store';

export const startCountdown = () => {
  const { status, current } = getCounterStateByStore();
  if (status !== 'ready' || current <= 0) return;

  const dispatch = store.dispatch;
  dispatch(setStatus({ status: 'started' }));

  let interval;

  const decrementFunction = () => {
    dispatch(decrement());

    if (getCounterStateByStore().current <= 0) stopCountdown();
  };

  interval = setInterval(decrementFunction, 1000);

  dispatch(start({ interval }));
};

const stopCountdown = () => {
  clearInterval(getCounterStateByStore().interval);
  store.dispatch(setInputDisabled({ disabled: true }));

  store.dispatch(setFinished({ finished: true }));
};

export const restartApp = () => {
  store.dispatch(restart());

  clearInterval(getCounterStateByStore().interval);
  store.dispatch(setInputDisabled({ disabled: false }));
  store.dispatch(setFinished({ finished: false }));

  runGetWordData();
};
