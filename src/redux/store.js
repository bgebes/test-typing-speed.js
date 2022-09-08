import { configureStore } from '@reduxjs/toolkit';
import AppReducer from './App/AppSlice';
import CounterReducer from './Counter/CounterSlice';
import ResultReducer from './Result/ResultSlice';

export const store = configureStore({
  reducer: {
    app: AppReducer,
    counter: CounterReducer,
    result: ResultReducer,
  },
});
