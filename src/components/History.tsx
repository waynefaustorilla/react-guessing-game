import React, { FunctionComponent } from "react";
import styles from "./../css/history.module.css";

const History: FunctionComponent = (): JSX.Element => {
  return (
    <ul className={styles.card}>
      <li className={styles.list}>Number is lesser than 100</li>
      <li className={styles.list}>Number is more than 1</li>
      <li className={styles.list}>Number is lesser than 100</li>
      <li className={styles.list}>Number is more than 1</li>
      <li className={styles.list}>Number is lesser than 100</li>
      <li className={styles.list}>Number is more than 1</li>
      <li className={styles.list}>Number is lesser than 100</li>
      <li className={styles.list}>Number is more than 1</li>
      <li className={styles.list}>Number is lesser than 100</li>
      <li className={styles.list}>Number is more than 1</li>
    </ul>
  );
};

export default History;