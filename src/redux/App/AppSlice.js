import { createSlice } from '@reduxjs/toolkit';

export const AppSlice = createSlice({
  name: 'app',
  initialState: {
    lang: 'tr',
    status: 'ready',
    words: {
      focused: '',
      shown: [],
      total: [],
    },
  },
  reducers: {},
  extraReducers: {},
});

export const {} = AppSlice.actions;
export default AppSlice.reducer;
