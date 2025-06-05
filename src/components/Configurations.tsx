import React, { FunctionComponent } from "react";
import styles from "./../css/configurations.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { randomActions } from "../state/reducers/random";

const Configurations: FunctionComponent = (): JSX.Element => {
  const dispatch = useDispatch();

  const { hints } = useSelector((state: RootState) => state.random);


  const handleCheck = () => {
    const action = randomActions.toggleHint();

    dispatch(action);
  };

  return (
    <div className={styles.card}>
      <div className={styles.listItem}>
        <input
          type="checkbox"
          name="hints"
          checked={hints}
          className={styles.check}
          onChange={handleCheck}
        />
        <span>Enable Hints</span>
      </div>
    </div>
  );
};

export default Configurations;