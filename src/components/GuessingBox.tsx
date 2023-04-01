import React, { ChangeEvent, FormEvent, FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { randomActions } from "../state/reducers/random";
import { RootState } from "../state/store";
import styles from "./../css/guessingbox.module.css";

const GuessingBox: FunctionComponent = (): JSX.Element => {
  const { incrementTries, setMessage, setGuess, resetState } = randomActions;
  const { maximum, tries, number, guess, messages } = useSelector((state: RootState) => state.random);

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

  const GuessButton: FunctionComponent = (): JSX.Element => {
    return (
      <button type={"submit"} className={`${styles.button} ${isDisabled() ? "bg-gray-300" : null}`}>
        Guess
      </button>
    );
  };

  const ResetButton: FunctionComponent = (): JSX.Element => {
    return (
      <button type={"button"} className={`${styles.button} ${isDisabled() ? "bg-gray-300" : null}`} onClick={() => dispatch(resetState())}>
        Play Again
      </button>
    );
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
      />

      {
        (tries >= 10) || (messages[0] === "That's correct! You win.") ?
          <ResetButton />
          :
          <GuessButton />
      }
    </form>
  );
};

export default GuessingBox;