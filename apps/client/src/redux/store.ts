import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice';
import webSocketSlice from './webSocketSlice';

export const store = configureStore({
  reducer: { game: gameReducer, webSocket: webSocketSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
