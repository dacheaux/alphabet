import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsGameRunning, toggleStart } from '../app/gameSlice';

interface Props {}

const CLASS = 'Console';

const MainConsole: React.FC<Props> = (props) => {
    const [diff, setDiff] = useState('medium');
    const isRunning = useSelector(selectIsGameRunning);
    const dispatch = useDispatch();

    const onDiffChange = useCallback((e) => {
        const val = e.target.value;
        setDiff(val);
    }, []);

    const toggleGameStatus = () => {
        dispatch(toggleStart(!isRunning));
    };

    useEffect(() => {
        console.log({ isRunning, diff });
    }, [isRunning, diff]);

    return (
        <section className={CLASS}>
            <div className={`${CLASS}__diff-selector`}>
                {['easy', 'medium', 'hard'].map((difficulty) => (
                    <div className={`${CLASS}__radio`} key={difficulty}>
                        <input
                            value={difficulty}
                            type="radio"
                            id={`diff-${difficulty}`}
                            checked={difficulty === diff}
                            onChange={onDiffChange}
                            disabled={isRunning}
                        />
                        <label htmlFor={`diff-${difficulty}`}>{difficulty}</label>
                    </div>
                ))}
            </div>
            <button type="button" onClick={toggleGameStatus}>
                {isRunning ? 'Stop' : 'Start Game'}
            </button>
            <div>10</div>
            <input type="input" />
        </section>
    );
};

export default MainConsole;
