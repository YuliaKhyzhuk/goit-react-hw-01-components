import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#2a2a2a',
    white: '#fff',
    primary: '#2a2a2a',
    secondary: '#ffffff',
    primaryAccent: '#ff6698',
    secondaryAccent: '#6698ff',
    backgroundGreen: '#98ff66',
    backgroundOrange: '#ffb366',
    backgroundYellow: '#ffff66',
  },
  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
