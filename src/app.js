// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';
import Task01 from '../01/Task01';


const root = createRoot(document.querySelector('#root'));
root.render(<App />);
