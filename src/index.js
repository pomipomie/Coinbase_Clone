import './index.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import ThemeWrapper from "./components/themeWrapper";

ReactDOM.render(
  <ThemeWrapper>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </ThemeWrapper>,
  document.getElementById('root')
);
