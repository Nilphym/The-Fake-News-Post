import { createSlice } from '@reduxjs/toolkit';

export interface SocketState {
  connected: boolean;
  pin?: string;
  user?: string;
  ranking?: any;
}

const initialState: SocketState = {
  connected: false,
  pin: undefined,
  user: undefined,
  ranking: [
    {
      name: 'Konrad',
      score: 42,
    },
    {
      name: 'Konrad',
      score: 42,
    },
    {
      name: 'Konrad',
      score: 42,
    },
    {
      name: 'Konrad',
      score: 42,
    },
    {
      name: 'Konrad',
      score: 42,
    },
    {
      name: 'Konrad',
      score: 42,
    },
    {
      name: 'Konrad',
      score: 42,
    },
    {
      name: 'Konrad',
      score: 42,
    },
    {
      name: 'Konrad',
      score: 42,
    },
    {
      name: 'Konrad',
      score: 42,
    },
    {
      name: 'Konrad',
      score: 42,
    },
    {
      name: 'Konrad',
      score: 42,
    },
    {
      name: 'Konrad',
      score: 42,
    },
    {
      name: 'Konrad',
      score: 42,
    },
    {
      name: 'Konrad',
      score: 42,
    },
    {
      name: 'Konrad',
      score: 42,
    },
    {
      name: 'Konrad',
      score: 42,
    },
    {
      name: 'Konrad',
      score: 2,
    },
  ],
};

export const webSocketSlice = createSlice({
  name: 'webSocket',
  initialState,
  reducers: {
    connect: (state) => {
      state.connected = true;
    },
    savePin: (state: any, action) => {
      state.pin = action.payload;
    },
    saveUser: (state: any, action) => {
      state.user = action.payload;
    },
    saveRanking: (state: any, action) => {
      state.ranking = action.payload;
    },
  },
});

export const { connect, savePin, saveUser, saveRanking } =
  webSocketSlice.actions;

export default webSocketSlice.reducer;
