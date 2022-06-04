import { WEB_SOCKET_API_URL } from '../config';
import io from 'socket.io-client';

export type PossibleAnswer = 'fake' | 'real' | undefined;
export type NewsType = {
  id: string;
  title: string;
  content: string;
};
export type AnswersType = {
  id: string;
  answer: PossibleAnswer;
  elapsedTime: number;
};

export const webSocketService = {
  socket: null as any,
  connect() {
    this.socket = io(WEB_SOCKET_API_URL);
  },
  createGame(callback: any) {
    this.socket.emit('game:create', (response: { gameCode: string }) =>
      callback(response),
    );
  },
  startGame() {
    this.socket.emit('game:start');
  },
  joinGame(nickname: string) {
    this.socket.emit('game:join', nickname);
  },
  startQuestion(callback: any) {
    this.socket.emit('game:question_start', (response: Array<NewsType>) =>
      callback(
        response.map((singleNews: NewsType) => ({
          ...singleNews,
          title: singleNews.title.replaceAll('\\"', '"'),
          content: singleNews.content.replaceAll('\\"', '"'),
          image: 'http://loremflickr.com/1234/2345/people?56789',
        })),
      ),
    );
  },
  stopQuestion() {
    this.socket.emit('game:question_stop');
  },
  correctAnswer(callback: any) {
    this.socket.emit('game:correct_answer', (response: any) =>
      callback(response),
    );
  },
  rank(callback: any) {
    this.socket.emit('game:rank', (response: any) => callback(response));
  },
  stopGame() {
    this.socket.emit('game:stop');
  },
};
