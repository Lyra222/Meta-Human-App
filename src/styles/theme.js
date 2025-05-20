import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4A90E2', // Blue for header and buttons
    },
    secondary: {
      main: '#FFD700', // Gold for text and accents
    },
    background: {
      default: '#F5F6F5', // Light gray background
    },
  },
  typography: {
    h1: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#FFD700', // Gold for "Meta Human"
    },
    body1: {
      fontSize: '1rem',
      color: '#333333', // Dark gray for text
    },
  },
});