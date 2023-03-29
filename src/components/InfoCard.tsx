import React, { FunctionComponent } from "react";
import styles from "./../css/configurations.module.css";

/**
 * Welcome to my Guessing Game made with ReactJS!
 * This is a fun and simple game where you have to guess a number between 1 and 100.
 * You have 10 tries to get it right, and you will get hints along the way.
 * If you run out of tries or guess the wrong number, you lose.
 * But if you guess the right number, you win!
 * Sounds easy, right?
 * Well, there's a catch: the number changes every time you play, so you can never be sure what it is.
 * Are you ready to test your luck and skills? Then click the button below and start guessing!
*/

const InfoCard: FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.card}>
      <button type={"button"} className={"bg-purple-500 p-2 text-white rounded w-full"}>About the Game</button>
    </div>
  );
};

export default InfoCard;