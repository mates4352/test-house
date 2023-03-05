import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/variable/global.css';
import './assets/css/variable/fonts.css';
import './assets/css/variable/color.css';
import './index.css';
import { App } from './view/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(<App />);

reportWebVitals();
