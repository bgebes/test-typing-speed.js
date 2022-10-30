import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getWordData } from '../../actions/actions';

export const wordData = createAsyncThunk('app/wordData', getWordData);

export const AppSlice = createSlice({
  name: 'app',
  initialState: {
    lang: 'tr',
    langTitles: {
      tr: {
        header: 'Sonuç',
        wpmUnit: 'DKS',
        wpmSubTitle: 'kelime yazabiliyorum',
        keyStrokes: 'Tuş Vuruşu',
        accuracy: 'Doğruluk',
        correctWords: 'Doğru Kelime',
        wrongWords: 'Yanlış Kelime',
      },
      en: {
        header: 'Result',
        wpmUnit: 'WPM',
        wpmSubTitle: 'can type',
        keyStrokes: 'Keystrokes',
        accuracy: 'Accuracy',
        correctWords: 'Correct words',
        wrongWords: 'Wrong words',
      },
    },
    inputValue: '',
    inputDisabled: false,
    appFinished: false,
    words: {
      focused: '',
      shown: [],
      total: [],
      pageCount: 0,
    },
  },
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload.lang;
    },
    focusNextWord: (state, _) => {
      const focusedIndex = state.words.shown.indexOf(state.words.focused);

      state.words.focused = state.words.shown[focusedIndex + 1];
    },
    nextPage: (state, _) => {
      const pageIndex = ++state.words.pageCount;

      state.words.shown = state.words.total.slice(
        pageIndex * 20,
        (pageIndex + 1) * 20
      );

      state.words.focused = state.words.shown[0];
    },
    changeInputValue: (state, action) => {
      state.inputValue = action.payload.value;
    },
    setInputDisabled: (state, action) => {
      state.inputDisabled = action.payload.disabled;
    },
    setFinished: (state, action) => {
      state.appFinished = action.payload.finished;

      if (!action.payload.finished) {
        state.inputValue = '';
        state.words = {
          focused: '',
          shown: [],
          total: [],
          pageCount: 0,
        };
      }
    },
  },
  extraReducers: {
    [wordData.pending]: (state, action) => {},
    [wordData.rejected]: (state, action) => {},
    [wordData.fulfilled]: (state, action) => {
      state.words.total = action.payload;
      state.words.shown = action.payload.filter((_, index) => index < 20);
      state.words.focused = state.words.shown[0];
    },
  },
});

export const {
  setLang,
  focusNextWord,
  nextPage,
  changeInputValue,
  setInputDisabled,
  setFinished,
} = AppSlice.actions;
export default AppSlice.reducer;
