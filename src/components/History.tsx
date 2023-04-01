import React, { Fragment, FunctionComponent } from "react";
import styles from "./../css/history.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

const History: FunctionComponent = (): JSX.Element => {
  const { messages } = useSelector((state: RootState) => state.random);

  return (
    <Fragment>
      {
        messages.length < 1 ?
          null
          :
          <ul className={styles.card}>
            {
              messages.map((message, index) => {
                return (
                  <li className={styles.list} key={index}>{message}</li>
                );
              })
            }
          </ul>
      }
    </Fragment>
  );
};

export default History;