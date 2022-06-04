import React from 'react';
import styles from './Logo.module.scss';

export const Logo = () => {
    return (
        <div className={styles.mainContainer}>
            <h2 className={styles.subHeader}>THE FAKE NEWS POST</h2>
            <h1>HOLLYWOOD FACTORY</h1>
            <div className={styles.flex}>
                <div className={styles.borders}></div>
                <span>March 24, 1976</span>
                <div className={styles.borders}></div>
            </div>
        </div>
    );
};
