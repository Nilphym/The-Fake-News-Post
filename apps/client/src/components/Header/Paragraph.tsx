import React from "react";
import styles from "./Paragraph.module.scss"

export const Paragraph = ({children}: any) =>  {
    return <span className={styles.text}>{children}</span>
}   