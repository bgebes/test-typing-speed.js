import { createSlice } from '@reduxjs/toolkit';

export const CounterSlice = createSlice({
  name: 'counter',
  initialState: {
    status: 'ready',
    current: 60,
    interval: null,
  },
  reducers: {
    increment: (state, _) => {
      state.current++;
    },
    decrement: (state, _) => {
      state.current--;
    },
    start: (state, action) => {
      state.interval = action.payload.interval;
    },
    restart: (state, _) => {
      state.status = 'ready';
      state.current = 60;
    },
    setStatus: (state, action) => {
      state.status = action.payload.status;
    },
  },
});

export const { increment, decrement, start, restart, setStatus } =
  CounterSlice.actions;
export default CounterSlice.reducer;
