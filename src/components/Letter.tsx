import React from 'react';

interface Props {
    value: string;
    num: number;
}

const Letter: React.FC<Props> = ({ value, num }) => {
    return (
        <div className="Letter">
            {value} ({num})
        </div>
    );
};

export default Letter;
