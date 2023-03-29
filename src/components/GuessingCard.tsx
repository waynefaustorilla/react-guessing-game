import React, { FunctionComponent, ReactNode } from "react";
import styles from "./../css/guessingcard.module.css";

interface Properties {
  children: ReactNode;
}

const GuessingCard: FunctionComponent<Properties> = ({ children }: Properties): JSX.Element => {
  return (
    <div className={styles.guessingCard}>
      {children}
    </div>
  );
};

export default GuessingCard;