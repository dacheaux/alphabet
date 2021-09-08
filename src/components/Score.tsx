import React from 'react';
import { useSelector } from 'react-redux';
import { selectGameStats } from '../app/gameSlice';

interface Props {}

const CLASS = 'Score';

const Score: React.FC<Props> = (props) => {
    const { hit, miss, left } = useSelector(selectGameStats);
    return (
        <div className={CLASS}>
            <div>SCORE</div>
            <div className={`${CLASS}__hit`}>HIT: {hit}</div>
            <div className={`${CLASS}__miss`}>MISS: {miss}</div>
            <div className={`${CLASS}__left`}>LEFT: {left}</div>
        </div>
    );
};

export default Score;
