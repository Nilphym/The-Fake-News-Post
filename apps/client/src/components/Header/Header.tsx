import React from 'react';
import { Logo } from './Logo';
import { Paragraph } from './Paragraph';
import styles from './Header.module.scss';
// import { CategoryList } from './CategoryList';

export const Header = () => {
  return (
    <>
      <div className={styles.flex}>
        <Paragraph>Vol. 127 - N.39</Paragraph>
        <Logo />
        <Paragraph>Price: Free</Paragraph>
      </div>
      {/* <CategoryList /> */}
    </>
  );
};
