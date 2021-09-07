import React from 'react';

import Console from './components/Console';
import LetterTable from './components/LetterTable';
import Score from './components/Score';

import './App.scss';

function App() {
    return (
        <div className="App">
            <Console />
            <LetterTable />
            <Score />
        </div>
    );
}

export default App;
