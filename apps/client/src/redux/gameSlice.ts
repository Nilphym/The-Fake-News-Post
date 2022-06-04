import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GameState {
  news: Array<Object>;
  answers: Array<Object>;
}

const initialState: GameState = {
  news: [],
  answers: [],
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    answer: (state, action: PayloadAction<string>) => {
      state.answers.push(action.payload);
      console.log(action);
    },
  },
});

export const { answer } = gameSlice.actions;

export default gameSlice.reducer;
