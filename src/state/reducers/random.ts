import { createSlice } from "@reduxjs/toolkit";

const randomize = (maximum: number) => {
  return Math.floor(Math.random() * (maximum + 1));
};

interface InitialProps {
  number: number;
  hints: boolean;
  tries: number;
  guess: number;
  hasWon: boolean;
  maximum: number,
  messages: string[];
  difficulty: {
    easy: number;
    medium: number;
    hard: number;
    expert: number;
  }
}

const initial: InitialProps = {
  number: 0,
  hints: false,
  tries: 0,
  guess: 0,
  maximum: 0,
  hasWon: false,
  messages: [],
  difficulty: {
    easy: 100,
    medium: 1000,
    hard: 100000,
    expert: 1000000,
  }
};

const randomSlice = createSlice({
  name: "random",
  initialState: initial,
  reducers: {
    setDifficulty: (state, { payload }) => {
      const { easy, medium, hard, expert } = state.difficulty;

      switch (payload) {
        case "EASY":
          state.number = randomize(easy);
          state.maximum = easy;
          break;
        case "MEDIUM":
          state.number = randomize(medium);
          state.maximum = medium;
          break;
        case "HARD":
          state.number = randomize(hard);
          state.maximum = hard;
          break;
        case "EXPERT":
          state.number = randomize(expert);
          state.maximum = expert;
          break;
        default:
          break;
      }
    },
    toggleHint: (state) => {
      state.hints = !state.hints;
    },
    incrementTries: (state) => {
      state.tries += 1;
    },
    resetTries: (state) => {
      state.tries = 0;
    },
    setMessage: (state, { payload }) => {
      state.messages.unshift(payload);
      if (state.messages.length > 20) {
        state.messages.pop();
      }
    },
    setGuess: (state, { payload }) => {
      state.guess = payload;
    },
    resetState: (state) => {
      state.number = randomize(state.maximum);
      state.tries = 0;
      state.messages = [];
      state.hasWon = false;
      state.guess = 0;
    },
    setWon: (state) => {
      state.hasWon = true;
    }
  }
});

export const randomActions = randomSlice.actions;
export default randomSlice.reducer;