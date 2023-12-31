import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { StyledEngineProvider } from '@mui/material/styles';
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>
);
reportWebVitals();