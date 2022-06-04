export type PossibleAnswer = 'fake' | 'real';
export type NewsType = Array<{
  id: string;
  title: string;
  content: string;
  image: string;
}>;
export type AnswersType = {
  id: string;
  answer: PossibleAnswer;
  elapsedTime: number;
};

export const gameService = {
  getNews: async (): Promise<NewsType> => {
    return [
      {
        id: '1',
        title: 'President John F Kennedy assassinated in the United States',
        content:
          "Jack Ruby murders John F. Kennedy's suspected assassin Lee Harvey Oswald during the transportation of Oswald from Dallas Police Headquaters to the Dallas Country Jail on November 24th live on television.",
        image:
          'http://1.bp.blogspot.com/-bCKdfX_Ws8E/Tfrh2D9wNjI/AAAAAAACMrk/CCeSMyR3XSo/s1600/old_america_01.jpg',
      },
      {
        id: '2',
        title: 'President John F Kennedy assassinated in the United States',
        content:
          "Jack Ruby murders John F. Kennedy's suspected assassin Lee Harvey Oswald during the transportation of Oswald from Dallas Police Headquaters to the Dallas Country Jail on November 24th live on television.",
        image:
          'http://1.bp.blogspot.com/-bCKdfX_Ws8E/Tfrh2D9wNjI/AAAAAAACMrk/CCeSMyR3XSo/s1600/old_america_01.jpg',
      },
    ];
  },
  calculateElapsedTime: ({ startTime }: { startTime: number }) => {
    const endTime = new Date();
    const timeDiff = (endTime.getTime() - startTime) / 1000;
    const seconds = Math.round(timeDiff);
    return seconds;
  },
};
