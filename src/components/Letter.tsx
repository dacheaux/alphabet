import React from 'react';
import classnames from 'classnames';

import { letter } from '../app/gameSlice';

const CLASS = 'Letter';

const Letter: React.FC<letter> = ({ val, id, hit, miss }) => {
    const LetterClass = classnames(CLASS, {
        [`${CLASS}--hit`]: hit,
        [`${CLASS}--miss`]: miss,
    });

    return (
        <div className={LetterClass}>
            {val} ({id})
        </div>
    );
};

export default Letter;
