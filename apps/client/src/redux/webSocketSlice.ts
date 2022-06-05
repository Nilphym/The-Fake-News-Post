import { createSlice } from '@reduxjs/toolkit';

export interface SocketState {
  connected: boolean;
  pin?: string;
  user?: string;
}

const initialState: SocketState = {
  connected: false,
  pin: undefined,
  user: undefined,
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
  },
});

export const { connect, savePin, saveUser } = webSocketSlice.actions;

export default webSocketSlice.reducer;
