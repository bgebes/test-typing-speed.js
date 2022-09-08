import { createSlice } from '@reduxjs/toolkit';

export const ResultSlice = createSlice({
  name: 'result',
  initialState: {
    wordsPerMinute: 0,
    keyStrokes: {
      correct: 0,
      wrong: 0,
      total: 0,
    },
    accuracy: 0,
    words: {
      correct: [],
      wrong: [],
    },
  },
  reducers: {},
  extraReducers: {},
});

export const {} = ResultSlice.actions;
export default ResultSlice.reducer;
