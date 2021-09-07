import React, { useState } from 'react';
import { Provider, useSelector } from 'react-redux';

import store from '../app/store';
import Console from './Console';
import LetterTable from './LetterTable';
import Score from './Score';

import '../styles/App.scss';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Console />
                <LetterTable />
                <Score />
            </div>
        </Provider>
    );
}

export default App;
