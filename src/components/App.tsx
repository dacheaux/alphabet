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
    medium: 1500,
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
        dispatch(actions.generateNewLetterNum(guess));
    };

    const onKeyDown = (e: KeyboardEvent) => {
        clearInterval(letterRefId.current);
        nextNumber(e.key);
        window.document.removeEventListener('keydown', onKeyDown);
    };

    useEffect(() => {
        if (isRunning) {
            nextNumber();
        } else if (!isRunning) {
            clearInterval(letterRefId.current);
        }
    }, [isRunning]);

    useEffect(() => {
        if (currentLetterNum === 0) return;
        console.log('currentLetterNum', currentLetterNum);

        window.document.addEventListener('keydown', onKeyDown);
        clearInterval(letterRefId.current);
        letterRefId.current = window.setTimeout(nextNumber, timeout);
    }, [currentLetterNum]);

    useEffect(() => {
        return () => clearInterval(letterRefId.current);
    }, []);

    return (
        <div className="App">
            <Console />
            <LetterTable />
            <Score />
        </div>
    );
}

export default App;
