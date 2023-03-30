import React, { ChangeEvent, FormEvent, FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { randomActions } from "../state/reducers/random";
import { RootState } from "../state/store";
import styles from "./../css/guessingbox.module.css";

const { incrementTries, setMessage, setGuess } = randomActions;

const GuessingBox: FunctionComponent = (): JSX.Element => {
  const { maximum, tries, number, guess } = useSelector((state: RootState) => state.random);

  const dispatch = useDispatch();

  const isDisabled = () => {
    return tries >= 10;
  };

  const handleChange = (event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;

    dispatch(setGuess(parseInt(value)));
  };

  const handleTry = (event: FormEvent) => {
    event.preventDefault();

    dispatch(incrementTries());

    if (guess < number) {
      dispatch(setMessage(`${guess} is too low. Try again.`));
    } else if (guess > number) {
      dispatch(setMessage(`${guess} is too high. Try again.`));
    } else {
      dispatch(setMessage(`That's correct! You win.`));
    }
  };

  return (
    <form className={styles.container} onSubmit={handleTry}>
      <input
        type={"number"}
        defaultValue={guess}
        onChange={handleChange}
        min={1}
        max={maximum}
        className={`${styles.input} ${isDisabled() ? "bg-gray-300" : null}`}
        disabled={isDisabled()}
      />

      <button
        type={"submit"}
        className={`${styles.button} ${isDisabled() ? "bg-gray-300" : null}`}
        disabled={isDisabled()}
      >
          Guess
      </button>
    </form>
  );
};

export default GuessingBox;