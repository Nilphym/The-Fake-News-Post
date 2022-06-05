import { WEB_SOCKET_API_URL } from '../config';
import { io } from 'socket.io-client';

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

  removeListeners() {
    this.socket.removeAllListeners();
  },
  connect(callback: any) {
    this.socket = io(WEB_SOCKET_API_URL);
    return this.socket.on('connect', callback);
  },
  createGame(callback: any) {
    this.socket.emit('game:create', (response: { id: string }) =>
      callback(response),
    );
  },
  checkUserJoined(callback: any) {
    this.socket.on('game:user_joined', (response: { user: string }) =>
      callback(response),
    );
  },
  startGame(pin: string) {
    this.socket.emit('game:start', pin);
  },
  joinGame({ pin, user }: { pin: string; user: string }) {
    this.socket.emit('game:join', { pin, user, authenticated: false });
  },
  startQuestion(pin: string) {
    this.socket.emit('game:question_start', pin);
  },
  checkQuestion(callback: any) {
    this.socket.on(
      'game:question_start',
      ({ question }: { question: NewsType }) => {
        callback({
          ...question,
          title: question.title.replaceAll('\\"', '"'),
          content: question.content.replaceAll('\\"', '"'),
          image: 'http://loremflickr.com/1234/2345/people?56789',
        });
      },
    );
  },
  sendAnswer(pin: string, user: string, answer_type: string) {
    this.socket.emit('game:answer', {
      pin,
      user,
      answer_type,
      authenticated: false,
    });
  },
  stopQuestion(pin: string) {
    this.socket.emit('game:question_stop', pin);
  },
  correctAnswer(callback: any) {
    this.socket.emit('game:correct_answer', (response: any) =>
      callback(response),
    );
  },
  rank(callback: any) {
    this.socket.on('game:rank', callback);
  },
  stopGame() {
    this.socket.emit('game:stop');
  },
};
