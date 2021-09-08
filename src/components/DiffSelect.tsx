import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, difficultyLevels, selectIsGameRunning, selectGameDiff } from '../app/gameSlice';

interface Props {}

const CLASS = 'DiffSelect';

const DiffSelect: React.FC<Props> = (props) => {
    const isRunning = useSelector(selectIsGameRunning);
    const diff = useSelector(selectGameDiff);
    const dispatch = useDispatch();

    const onDiffChange = useCallback((e) => {
        const val = e.target.value;
        dispatch(actions.toggleDifficulty(val));
    }, []);

    return (
        <div className={CLASS}>
            {difficultyLevels.map((difficulty) => (
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
    );
};

export default DiffSelect;
