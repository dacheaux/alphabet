import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    actions,
    selectIsGameRunning,
    selectGameDiff,
    selectCurrentLetterNum,
} from '../app/gameSlice';
import Console from './Console';
import LetterTable from './LetterTable';
import Score from './Score';

import '../styles/App.scss';

export const diffTimeouts = {
    easy: 5000,
    medium: 3500,
    hard: 2000,
};

function App() {
    const letterRefId = useRef(0);
    const isRunning = useSelector(selectIsGameRunning);
    const difficulty = useSelector(selectGameDiff);

    const currentLetterNum = useSelector(selectCurrentLetterNum);
    const dispatch = useDispatch();

    const timeout = diffTimeouts[difficulty];

    const nextNumber = (guess = '') => {
        clearInterval(letterRefId.current);
        dispatch(actions.generateNewLetterNum(guess));
    };

    // const onKeyDown = (e: KeyboardEvent) => {
    //     nextNumber(e.key);
    // };

    useEffect(() => {
        if (isRunning) {
            nextNumber();
        } else if (!isRunning) {
            clearInterval(letterRefId.current);
        }
    }, [isRunning]);

    useEffect(() => {
        if (currentLetterNum === 0) return;
        letterRefId.current = window.setTimeout(nextNumber, timeout);
    }, [currentLetterNum]);

    useEffect(() => {
        // document.addEventListener('keydown', onKeyDown);
        return () => {
            clearInterval(letterRefId.current);
            // document.removeEventListener('keydown', onKeyDown);
        };
    }, []);

    return (
        <div className="App">
            <Console onGuess={nextNumber} />
            <LetterTable />
            <Score />
        </div>
    );
}

export default App;
