import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from './mui';
import theme from './theme';
import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);
const app = (
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);

root.render(app);
