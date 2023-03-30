import React, { FunctionComponent, HTMLInputTypeAttribute } from "react";
import styles from "./../css/difficultycard.module.css";
import { useDispatch } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";

interface Props {
  label: string;
  type: HTMLInputTypeAttribute;
  isChecked(): boolean;
  onCheck(): AnyAction
}

const DifficultySelector: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div className={styles.listItem}>
      <input
        type={props.type}
        name={"difficulty"}
        className={styles.radio}
        checked={props.isChecked()}
        onChange={
          () => dispatch(props.onCheck())
        }
      />

      <span>{props.label}</span>
    </div>
  );
};

export default DifficultySelector;