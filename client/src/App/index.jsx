import React from 'react';
import { CssBaseline, ThemeProvider } from '../mui';
import theme from '../theme';
import './index.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        Hello, Quizzer!
      </div>
    </ThemeProvider>
  );
}

export default App;
