import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
            <FormControl component="fieldset">
                <RadioGroup
                    row
                    aria-label="gender"
                    name="gender1"
                    value={diff}
                    onChange={onDiffChange}
                >
                    {difficultyLevels.map((difficulty) => (
                        <FormControlLabel
                            value={difficulty}
                            control={<Radio color="primary" size="small" />}
                            label={difficulty}
                            key={difficulty}
                            disabled={isRunning}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default DiffSelect;
