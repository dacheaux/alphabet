import React from 'react';

import Letter from './Letter';

interface Props {}

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

const LetterTable: React.FC<Props> = (props) => {
    return (
        <div className="LetterTable">
            {ALPHABET.map((letter, idx) => (
                <Letter value={letter} num={idx + 1} key={idx} />
            ))}
        </div>
    );
};

export default LetterTable;
