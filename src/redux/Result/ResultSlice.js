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
    match: (state, action) => {
      const { type, word } = action.payload;

      state.words[type].push(word);
      state.wordsPerMinute++;

      state.accuracy = parseFloat(
        ((state.words.correct.length / state.wordsPerMinute) * 100).toFixed(2)
      );
    },
    matchKeyStrokes: (state, action) => {
      const { correct, wrong, total } = action.payload;

      state.keyStrokes.correct += correct;
      state.keyStrokes.wrong += wrong;
      state.keyStrokes.total += total;
    },
  },
  extraReducers: {},
});

export const { match, matchKeyStrokes } = ResultSlice.actions;
export default ResultSlice.reducer;
