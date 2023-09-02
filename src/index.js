import React from 'react';
import 'modern-normalize';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'styles/GlobalStyles';
import App from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-05-movies">
    <React.StrictMode>
      <Global styles={GlobalStyles} />
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
