import { getCounterStateByStore } from '../actions/actions';
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
};

export const restartCountdown = () => {
  store.dispatch(restart());

  stopCountdown();
  startCountdown();
};
