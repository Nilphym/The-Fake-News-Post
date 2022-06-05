import { useNavigate } from 'react-router-dom';
import { getFormattedDate } from '../../../utils/getFormattedDate';
import styles from './Logo.module.scss';

export const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.mainContainer} onClick={() => navigate('/')}>
      <h1 className={styles.subHeader}>
        THE <span className={styles.overline}>FAKE</span> NEWS POST
      </h1>
      <div className={styles.flex}>
        <div className={styles.borders}></div>
        <span className={styles.date}>{getFormattedDate()}</span>
        <div className={styles.borders}></div>
      </div>
    </div>
  );
};
