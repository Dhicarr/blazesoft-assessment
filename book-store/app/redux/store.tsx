"use client"

import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './Features/bookSlice';
import dialogReducer from './Features/dialogSlice';

export const store = configureStore({
  reducer: {
      bookStates: bookReducer,
      dialogStates: dialogReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;