import { createSlice } from "@reduxjs/toolkit";

const randomize = (maximum: number) => {
  return Math.floor(Math.random() * maximum);
};

const randomSlice = createSlice({
  name: "random",
  initialState: {
    number: 0,
    hints: false,
    tries: 0,
    guess: 0,
    maximum: 0,
    message: "",
    difficulty: {
      easy: 100,
      medium: 1_000,
      hard: 100_000,
      expert: 1_000_000,
    }
  },
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
      state.message = payload;
    },
    setGuess: (state, { payload }) => {
      state.guess = payload;
    }
  }
});

export const randomActions = randomSlice.actions;
export default randomSlice.reducer;