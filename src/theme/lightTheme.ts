import { createTheme } from '@mui/material';
// Mui colors
import { common, grey, orange } from '@mui/material/colors';
// Theme
import { shape, components } from 'theme';

export const lightTheme = createTheme({
  direction: 'ltr',
  shape,
  components,
  palette: {
    mode: 'light',
    background: {
      default: '#D2DBE3',
      paper: common.white,
    },
    primary: {
      main: orange[500],
      light: orange[400],
      dark: orange[600],
      contrastText: common.white,
    },
    secondary: {
      main: '#30454f',
      light: '#5b707b',
      dark: '#081e27',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: grey[900],
      secondary: grey[700],
    },
  },
});
