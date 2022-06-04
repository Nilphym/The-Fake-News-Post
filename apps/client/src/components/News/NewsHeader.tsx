import React from 'react';
import styles from './NewsHeader.module.scss';

export const NewsHeader = ({ children }: { children: string }) => {
  return <h2 className={styles.container}>{children}</h2>;
};
