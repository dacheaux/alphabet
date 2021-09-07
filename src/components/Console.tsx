import React, { useCallback, useState } from 'react';

interface Props {}

const CLASS = 'Console';

const MainConsole: React.FC<Props> = (props) => {
    const [diff, setDiff] = useState('medium');

    const onDiffChange = useCallback((e) => {
        const val = e.target.value;
        setDiff(val);
    }, []);

    return (
        <section className={CLASS}>
            <div className={`${CLASS}__diff-selector`}>
                {['easy', 'medium', 'hard'].map((difficulty) => (
                    <div className={`${CLASS}__radio`}>
                        <input
                            value={difficulty}
                            type="radio"
                            id={`diff-${difficulty}`}
                            checked={difficulty === diff}
                            onChange={onDiffChange}
                        />
                        <label htmlFor={`diff-${difficulty}`}>{difficulty}</label>
                    </div>
                ))}
            </div>
            <button type="button">Start Game</button>
            <div>10</div>
            <input type="input" />
        </section>
    );
};

export default MainConsole;
