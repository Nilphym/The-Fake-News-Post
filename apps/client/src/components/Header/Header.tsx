import { Logo } from './Logo';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.container}>
      <span className={styles.paragraph}>Vol. 127 - N.39</span>
      <Logo />
      <span className={styles.paragraph}>Price: Free</span>
    </div>
  );
};
