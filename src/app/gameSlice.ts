import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    isRunning: false,
  },
  reducers: {
    "GameRunning": (state, action) => {
      state.isRunning = action.payload;
    },
  },
});

export const toggleStart = gameSlice.actions.GameRunning;

export const selectIsGameRunning = (state: RootState) => state.game.isRunning;

export default gameSlice.reducer;
