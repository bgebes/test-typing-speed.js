import { createSlice } from '@reduxjs/toolkit';

export const CounterSlice = createSlice({
  name: 'counter',
  initialState: {
    current: 60,
  },
  reducers: {
    increment: (state, _) => {
      state.current++;
    },
    decrement: (state, _) => {
      state.current--;
    },
  },
});

export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;
