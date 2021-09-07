import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const difficultyLevels = <const>['easy', 'medium', 'hard'];

interface InitialState {
    isRunning: boolean;
    difficulty: typeof difficultyLevels[number];
}

const initialState: InitialState = {
    isRunning: false,
    difficulty: 'medium',
}

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    "GameRunning": (state, action) => {
      state.isRunning = action.payload;
    },
    "Difficulty":  (state, action: PayloadAction<typeof difficultyLevels[number]>) => {
        state.difficulty = action.payload;
    },
  },
});

export const toggleStart = gameSlice.actions.GameRunning;
export const toggleDifficulty = gameSlice.actions.Difficulty;

export const selectIsGameRunning = (state: RootState) => state.game.isRunning;
export const selectGameDiff = (state: RootState) => state.game.difficulty;

export default gameSlice.reducer;
