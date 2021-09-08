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
    guess: '',
    letters: ALPHABET.map((letter, idx) => ({
        val: letter,
        id: idx + 1,
        hit: false,
        miss: false,
    })),
};

export type letter = typeof initialState.letters[0];

const filterAvailableLetters = (l: letter) => !l.hit && !l.miss;

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        toggleStart: (state, action) => {
            const difficulty = state.difficulty;
            Object.assign(state, { ...initialState, difficulty, isRunning: true });
        },
        toggleDifficulty: (state, action: PayloadAction<typeof difficultyLevels[number]>) => {
            state.difficulty = action.payload;
        },
        generateNewLetterNum: (state, action) => {
            if (!state.isRunning) return;
            const guess = action.payload;
            const { currentLetterId, letters } = state;
            const hitOrMiss = ALPHABET[state.currentLetterId - 1] === guess ? 'hit' : 'miss';

            if (currentLetterId !== 0) {
                state[hitOrMiss] += 1;
                state.letters = letters.map((letter) => {
                    if (letter.id === currentLetterId) return { ...letter, [hitOrMiss]: true };
                    return letter;
                });
            }

            const availableNumbers = state.letters.filter(filterAvailableLetters).map((l) => l.id);
            if (!availableNumbers.length) {
                state.isRunning = false;
                return;
            }

            const newLetterId =
                availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
            state.currentLetterId = newLetterId;
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
export const selectGameStats = ({ game }: RootState) => ({
    hit: game.hit,
    miss: game.miss,
    left: game.letters.filter(filterAvailableLetters).length,
});

export default gameSlice.reducer;
