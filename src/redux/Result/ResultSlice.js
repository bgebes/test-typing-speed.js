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
      length: 0,
      correct: [],
      wrong: [],
    },
  },
  reducers: {
    correctMatch: (state, action) => {
      state.words.correct.push(action.payload.word);
      state.words.length++;
      state.wordsPerMinute++;

      state.accuracy = parseFloat(
        ((state.words.correct.length / state.words.length) * 100).toFixed(2)
      );
    },
    wrongMatch: (state, action) => {
      state.words.wrong.push(action.payload.word);
      state.words.length++;
      state.wordsPerMinute++;

      state.accuracy = parseFloat(
        ((state.words.correct.length / state.words.length) * 100).toFixed(2)
      );
    },
  },
  extraReducers: {},
});

export const { correctMatch, wrongMatch } = ResultSlice.actions;
export default ResultSlice.reducer;
