import { configureStore } from "@reduxjs/toolkit";
import randomReducer from "./reducers/random";

const store = configureStore({
  reducer: {
    random: randomReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;