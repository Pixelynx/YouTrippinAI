import { createTheme } from '@mui/material/styles';

const purpleTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#673ab7', // Purple
      light: '#9a67ea',
      dark: '#320b86',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff9800', // Orange for the gradient header
      light: '#ffc947',
      dark: '#c66900',
      contrastText: '#000000',
    },
    background: {
      default: '#f5f5f5', // Light grey background
      paper: '#ffffff', // White for cards
    },
    text: {
      primary: '#333333', // Dark text
      secondary: '#666666', // Grey text
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 500,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.12)',
            },
            '&:hover fieldset': {
              borderColor: '#673ab7',
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 24px',
        },
      },
    },
  },
});

export default purpleTheme; 