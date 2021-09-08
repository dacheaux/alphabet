import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export const difficultyLevels = <const>['easy', 'medium', 'hard'];
const userActions = <const>['hit', 'miss'];
export const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const initialState = {
    isRunning: false,
    difficulty: 'medium' as typeof difficultyLevels[number],
    hit: 0,
    miss: 0,
    currentLetterId: 0,
    availableNumbers: [...ALPHABET.keys()].map((k) => k + 1),
    guess: '',
    letters: ALPHABET.map((letter, idx) => ({
        val: letter,
        id: idx + 1,
        hit: false,
        miss: false,
    })),
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        toggleStart: (state, action) => {
            state.isRunning = action.payload;
            state.availableNumbers = initialState.availableNumbers;
        },
        toggleDifficulty: (state, action: PayloadAction<typeof difficultyLevels[number]>) => {
            state.difficulty = action.payload;
        },
        updateScore: (state, action: PayloadAction<typeof userActions[number]>) => {
            state[action.payload] += 1;
        },
        generateNewLetterNum: (state, action) => {
            const guess = action.payload;
            const { availableNumbers, currentLetterId, letters } = state;
            const newLetterId =
                availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
            const hitOrMiss = ALPHABET[state.currentLetterId - 1] === guess ? 'hit' : 'miss';

            state[hitOrMiss] += 1;
            state.letters = letters.map((letter) => {
                if (letter.id === currentLetterId) return { ...letter, [hitOrMiss]: true };
                return letter;
            });
            state.currentLetterId = newLetterId;
            state.availableNumbers = availableNumbers.filter((n) => n !== newLetterId);
            state.guess = guess;
        },
    },
});

export const { actions } = gameSlice;

export const selectIsGameRunning = (state: RootState) => state.game.isRunning;
export const selectGameDiff = (state: RootState) => state.game.difficulty;
export const selectCurrentLetterNum = (state: RootState) => state.game.currentLetterId;
export const selectLetterGuess = (state: RootState) => state.game.guess;
export const selectLetters = (state: RootState) => state.game.letters;

export default gameSlice.reducer;
