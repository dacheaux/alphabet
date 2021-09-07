import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsGameRunning, toggleStart } from '../app/gameSlice';
import DiffSelect from './DiffSelect';

interface Props {}

const CLASS = 'Console';

const MainConsole: React.FC<Props> = (props) => {
    const isRunning = useSelector(selectIsGameRunning);
    const dispatch = useDispatch();

    const toggleGameStatus = () => {
        dispatch(toggleStart(!isRunning));
    };

    return (
        <section className={CLASS}>
            <DiffSelect />
            <button className={`${CLASS}__start`} type="button" onClick={toggleGameStatus}>
                {isRunning ? 'Stop' : 'Start Game'}
            </button>
            <div className={`${CLASS}__letter-num`}>10</div>
            <input type="input" />
        </section>
    );
};

export default MainConsole;
