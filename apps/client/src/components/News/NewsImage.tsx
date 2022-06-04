import React from 'react';
import styles from './NewsImage.module.scss';

export const NewsImage = ({ image }: { image: string }) => {
  return <img className={styles.image} alt='News' src={image} />;
};
