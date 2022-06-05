import styles from './HowToPlay.module.scss';

export const HowToPlay = () => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.header}>How to play?</h2>
      <div className={styles.instructionDescription}>
        The game is pretty simple! You have to find if the article is fake or
        real, but you've got to be quick because you're competing with other
        players. Enjoy!
      </div>
    </div>
  );
};
