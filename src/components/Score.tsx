import React from 'react';

interface Props {}

const CLASS = 'Score';

const Score: React.FC<Props> = (props) => {
    return (
        <div className={CLASS}>
            <div>SCORE</div>
            <div>HIT: 4</div>
            <div>MISS: 1</div>
            <div>LEFT: 21</div>
        </div>
    );
};

export default Score;
