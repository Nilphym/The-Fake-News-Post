import React from 'react';
import styles from './NewsContent.module.scss';

export const NewsContent = ({
  children,
}: {
  children: string | React.ReactNode;
}) => {
  return <p className={styles.text}>{children}</p>;
};
