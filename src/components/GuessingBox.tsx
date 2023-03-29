import React, { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import styles from "./../css/guessingbox.module.css";

const GuessingBox: FunctionComponent = (): JSX.Element => {
  const { maximum } = useSelector((state: RootState) => state.random);

  const [myGuess, setMyGuess] = useState(0);

  const handleTry = (event: FormEvent) => {
    event.preventDefault();
  };

  const handleChange = (event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;

    console.log(value);
  };

  return (
    <form className={styles.container} onSubmit={handleTry}>
      <input
        type="number"
        defaultValue={myGuess}
        onChange={handleChange}
        min={1}
        max={maximum}
        className={styles.input}
      />

      <button type={"submit"} className={styles.button}>Guess</button>
    </form>
  );
};

export default GuessingBox;