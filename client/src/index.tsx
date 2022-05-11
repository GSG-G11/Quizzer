import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from './mui';
import theme from './theme';
import App from './App';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

const root = createRoot(document.getElementById('root') as HTMLElement);
const app = (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <StyledEngineProvider injectFirst>
      <StrictMode>
        <App />
      </StrictMode>
    </StyledEngineProvider>
  </ThemeProvider>
);

root.render(app);
