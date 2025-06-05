import React, { FunctionComponent } from "react";
import styles from "./../css/difficultycard.module.css";
import { useDispatch } from "react-redux";
import { randomActions } from "../state/reducers/random";
import DifficultySelector from "./DifficultySelector";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

const DifficultyCard: FunctionComponent = (): JSX.Element => {
  const dispatch = useDispatch();

  const { maximum, difficulty } = useSelector((state: RootState) => state.random);

  const isEasy = () => {
    return maximum === difficulty.easy;
  };

  const isMedium = () => {
    return maximum === difficulty.medium;
  };

  const isHard = () => {
    return maximum === difficulty.hard;
  };

  const isExpert = () => {
    return maximum === difficulty.expert;
  };

  return (
    <div className={styles.card}>
      <div className={styles.list}>
        <DifficultySelector
          label={"Easy (1 - 100)"}
          type={"radio"}
          isChecked={
            () => isEasy()
          }
          onCheck={() => randomActions.setDifficulty("EASY")}
        />

        <DifficultySelector
          label={"Medium (1 - 1,000)"}
          type={"radio"}
          isChecked={
            () => isMedium()
          }
          onCheck={() => randomActions.setDifficulty("MEDIUM")}
        />

        <DifficultySelector
          label={"Hard (1 - 100,000)"}
          type={"radio"}
          isChecked={
            () => isHard()
          }
          onCheck={() => randomActions.setDifficulty("HARD")}
        />

        <DifficultySelector
          label={"Expert (1 - 1,000,000)"}
          type={"radio"}
          isChecked={
            () => isExpert()
          }
          onCheck={() => randomActions.setDifficulty("EXPERT")}
        />
      </div>
    </div>
  );
};

export default DifficultyCard;