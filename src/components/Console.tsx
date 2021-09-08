import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

import { actions, selectIsGameRunning, selectCurrentLetterNum } from '../app/gameSlice';
import DiffSelect from './DiffSelect';

interface Props {
    onGuess: Function;
}

const CLASS = 'Console';

const MainConsole: React.FC<Props> = ({ onGuess }) => {
    const isRunning = useSelector(selectIsGameRunning);
    const currentLetterNum = useSelector(selectCurrentLetterNum);
    const dispatch = useDispatch();

    const toggleGameStatus = () => {
        dispatch(actions.toggleStart(!isRunning));
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        onGuess(value);
    };

    return (
        <section className={CLASS}>
            <DiffSelect />
            <Button
                style={{ fontWeight: 600 }}
                variant="outlined"
                color="primary"
                onClick={toggleGameStatus}
                size="large"
            >
                {isRunning ? 'Stop' : 'Start Game'}
            </Button>
            <div className={`${CLASS}__letter-num`}>{currentLetterNum}</div>
            <input
                className={`${CLASS}__input`}
                type="input"
                value=""
                placeholder="Input Letter"
                onChange={onChange}
            />
        </section>
    );
};

export default MainConsole;
