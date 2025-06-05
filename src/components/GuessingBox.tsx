import React, { ChangeEvent, FormEvent, FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { randomActions } from "../state/reducers/random";
import { RootState } from "../state/store";
import styles from "./../css/guessingbox.module.css";

const GuessingBox: FunctionComponent = (): JSX.Element => {
  const { incrementTries, setMessage, setGuess, resetState, setWon } = randomActions;
  const { maximum, tries, number, guess, hasWon } = useSelector((state: RootState) => state.random);

  const dispatch = useDispatch();

  const isDisabled = () => {
    return tries >= 10 || hasWon;
  };

  const handleChange = (event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    const numeric = parseInt(value);

    dispatch(setGuess(isNaN(numeric) ? 0 : numeric));
  };

  const handleTry = (event: FormEvent) => {
    event.preventDefault();

    dispatch(incrementTries());

    if (guess < number) {
      dispatch(setMessage(`${guess} is too low. Try again.`));
    } else if (guess > number) {
      dispatch(setMessage(`${guess} is too high. Try again.`));
    } else {
      dispatch(setMessage("Congratulations! You won."));
      dispatch(setWon());
    }
  };

  const GuessButton: FunctionComponent = (): JSX.Element => {
    return (
      <button type={"submit"} className={`${styles.button} ${isDisabled() ? "bg-gray-300" : null}`} disabled={isDisabled()}>
        Guess
      </button>
    );
  };

  const ResetButton: FunctionComponent = (): JSX.Element => {
    return (
      <button type={"button"} className={styles.button} onClick={() => dispatch(resetState())}>
        Play Again
      </button>
    );
  };

  return (
    <form className={styles.container} onSubmit={handleTry}>
      <input
        type={"number"}
        value={guess}
        onChange={handleChange}
        min={0}
        max={maximum}
        disabled={isDisabled()}
        className={`${styles.input} ${isDisabled() ? "bg-gray-300" : null}`}
      />

      {
        tries >= 10 || hasWon ?
          <ResetButton />
          :
          <GuessButton />
      }
    </form>
  );
};

export default GuessingBox;