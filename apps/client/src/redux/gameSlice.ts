import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  PossibleAnswer,
  AnswersType,
  gameService,
} from '../services/gameService';

export interface GameState {
  news: Array<Object>;
  loadingNews: boolean;
  answers: Array<AnswersType>;
  questionStartTime: number;
  currentQuestion: number;
}

const initialState: GameState = {
  news: [],
  loadingNews: true,
  answers: [],
  questionStartTime: 0,
  currentQuestion: 0,
};

export const getNews = createAsyncThunk('game/getNews', async () => {
  const news = await gameService.getNews();
  return news;
});

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    answer: (
      state,
      action: PayloadAction<{ id: string; answer: PossibleAnswer }>,
    ) => {
      const elapsedTime = gameService.calculateElapsedTime({
        startTime: state.questionStartTime,
      });

      state.answers.push({
        id: action.payload.id,
        answer: action.payload.answer,
        elapsedTime,
      });

      state.questionStartTime = new Date().getTime();
      state.currentQuestion += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.loadingNews = true;
        state.news = [];
        state.answers = [];
        state.questionStartTime = 0;
        state.currentQuestion = 0;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.loadingNews = false;
        state.questionStartTime = new Date().getTime();
      })
      .addCase(getNews.rejected, (state, action) => {
        state.loadingNews = false;
        console.error(action);
      });
  },
});

export const { answer } = gameSlice.actions;

export default gameSlice.reducer;
