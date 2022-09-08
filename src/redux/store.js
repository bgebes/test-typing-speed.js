import { configureStore } from '@reduxjs/toolkit';
import AppReducer from './App/AppSlice';

export const store = configureStore({
  reducer: {
    app: AppReducer,
  },
});
