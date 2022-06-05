import { apiService } from './apiService';

export type PossibleAnswer = 'FAKE' | 'REAL';
export type NewsType = {
  id: string;
  title: string;
  content: string;
  image: string;
};
export type AnswersType = {
  id: string;
  answer: PossibleAnswer;
  elapsedTime: number;
};

export const gameService = {
  getNews: async (): Promise<Array<NewsType>> => {
    const news = await apiService.post({ url: '/game' });
    return news.map(
      (singleNews: { id: string; title: string; content: string }) => ({
        ...singleNews,
        title: singleNews.title.replaceAll('\\"', '"'),
        content: singleNews.content.replaceAll('\\"', '"'),
        image: 'http://loremflickr.com/1234/2345/people?56789',
      }),
    );
  },
  calculateElapsedTime: ({ startTime }: { startTime: number }) => {
    const endTime = new Date();
    const timeDiff = (endTime.getTime() - startTime) / 1000;
    const seconds = Math.round(timeDiff);
    return seconds;
  },
};
