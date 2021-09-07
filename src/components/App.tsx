import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { randrange } from '../utils';
import { selectIsGameRunning, selectGameDiff, toggleStart } from '../app/gameSlice';
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
    const diff = useSelector(selectGameDiff);
    const dispatch = useDispatch();

    const timeout = diffTimeouts[diff];

    useEffect(() => {
        if (isRunning) {
            letterRefId.current = window.setInterval(() => {
                const letterNum = randrange(1, 26);
                console.log('letterNum', letterNum);
            }, timeout);
        } else if (!isRunning) {
            clearInterval(letterRefId.current);
        }
    }, [isRunning]);

    useEffect(() => {
        return () => clearInterval(letterRefId.current);
    });

    return (
        <div className="App">
            <Console />
            <LetterTable />
            <Score />
        </div>
    );
}

export default App;
