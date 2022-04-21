import { createTheme } from './mui';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 567,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1440,
      xxl: 1600,
    },
  },
  palette: {
    primary: { main: '#4A6572' },
    secondary: {
      main: '#F9AA33',
    },
    titleColor: {
      main: '#344955',
    },
    success: {
      main: '#75BA75',
    },
    fail: {
      main: '#EB5D5D',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;
