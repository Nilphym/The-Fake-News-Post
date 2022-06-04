import React from 'react';
import styles from './Logo.module.scss';

export const Logo = () => { 
    const today = new Date();
    let month: string | number = today.getMonth()+1;
    let day: string | number = today.getDay()+1;

    month = month.toString();
    day = day.toString();
    
    if(month.length == 1) {
        month = `0${month}`
    }

    if(day.length == 1) {
        day = `0${day}`
    }

    const date: string = `${today.getFullYear()}-${month}-${day}`


    return (
        <div className={styles.mainContainer}>
            <h2 className={styles.subHeader}>THE <span className={styles.overline}>FAKE</span> NEWS POST</h2>
            <div className={styles.flex}>
                <div className={styles.borders}></div>
                <span className={styles.date}>{date}</span>
                <div className={styles.borders}></div>
            </div>
        </div>
    );
};
