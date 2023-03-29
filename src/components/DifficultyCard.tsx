import React, { FunctionComponent } from "react";
import styles from "./../css/difficultycard.module.css";
import { useDispatch } from "react-redux/es/exports";
import { randomActions } from "../state/reducers/random";
import DifficultySelector from "./DifficultySelector";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

const DifficultyCard: FunctionComponent = (): JSX.Element => {
  const dispatch = useDispatch();

  const { number } = useSelector((state: RootState) => state.random);

  React.useEffect(() => {
    dispatch(randomActions.setDifficulty("EXPERT"));
  }, []);

  const isEasy = () => {
    return number > 1 && number < 100;
  };

  const isMedium = () => {
    return number > 100 && number < 1_000;
  };

  const isHard = () => {
    return number > 1_000 && number < 100_000;
  };

  const isExpert = () => {
    return number > 100_000 && number < 1_000_000;
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