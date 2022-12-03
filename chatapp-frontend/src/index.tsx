import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

if(process.env.NODE_ENV === 'development'){
    const {worker} = require('./mocks/browser');
    worker.start();
}

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
