import React from "react";
import styles from "./CategoryList.module.scss"

export const CategoryList = () => {
    const list =  ["HomePage", "StartGame", "Ranking Globalny"].map((e)=>{return <div key={e} className={styles.singleItem}>{e}</div>})
    return <div className={styles.flex}>
       {list}
    </div>
}