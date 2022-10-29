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
  reducers: {
    correctMatch: (state, action) => {
      state.words.correct.push(action.payload.word);
      state.wordsPerMinute++;
    },
    wrongMatch: (state, action) => {
      state.words.wrong.push(action.payload.word);
      state.wordsPerMinute++;
    },
  },
  extraReducers: {},
});

export const { correctMatch, wrongMatch } = ResultSlice.actions;
export default ResultSlice.reducer;
