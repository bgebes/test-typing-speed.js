import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getWordData } from '../../actions/actions';

export const wordData = createAsyncThunk('app/wordData', getWordData);

export const AppSlice = createSlice({
  name: 'app',
  initialState: {
    lang: 'tr',
    status: 'not-ready',
    words: {
      focused: '',
      shown: [],
      total: [],
      pageCount: 0,
    },
  },
  reducers: {},
  extraReducers: {
    [wordData.pending]: (state, action) => {},
    [wordData.rejected]: (state, action) => {},
    [wordData.fulfilled]: (state, action) => {
      state.words.total = action.payload;
      state.words.shown = action.payload.filter((_, index) => index < 20);
    },
  },
});

export const {} = AppSlice.actions;
export default AppSlice.reducer;
