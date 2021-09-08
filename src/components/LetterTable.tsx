import React from 'react';
import { useSelector } from 'react-redux';

import { selectLetters } from '../app/gameSlice';
import Letter from './Letter';

const LetterTable = () => {
    const letters = useSelector(selectLetters);

    return (
        <div className="LetterTable">
            {letters.map((val, idx) => (
                <Letter {...val} key={idx} />
            ))}
        </div>
    );
};

export default LetterTable;
