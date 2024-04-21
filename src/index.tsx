import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import { GlobalStyledComponents } from './utils/globalStyledComponents';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyledComponents />
    <Home />
  </React.StrictMode>
);

reportWebVitals();