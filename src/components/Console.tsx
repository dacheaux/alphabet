import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    actions,
    selectIsGameRunning,
    selectCurrentLetterNum,
    selectLetterGuess,
} from '../app/gameSlice';
import DiffSelect from './DiffSelect';

const CLASS = 'Console';

const MainConsole = () => {
    const isRunning = useSelector(selectIsGameRunning);
    const currentLetterNum = useSelector(selectCurrentLetterNum);
    const dispatch = useDispatch();
    const letterGuess = useSelector(selectLetterGuess);

    const toggleGameStatus = () => {
        dispatch(actions.toggleStart(!isRunning));
    };

    return (
        <section className={CLASS}>
            <DiffSelect />
            <button className={`${CLASS}__start`} type="button" onClick={toggleGameStatus}>
                {isRunning ? 'Stop' : 'Start Game'}
            </button>
            <div className={`${CLASS}__letter-num`}>{currentLetterNum}</div>
            <input type="input" value={letterGuess} readOnly />
        </section>
    );
};

export default MainConsole;
