import { createTheme } from '@mui/material';
// Mui colors
import { common, grey, orange } from '@mui/material/colors';
// Theme
import { shape, components } from 'theme';

export const darkTheme = createTheme({
  direction: 'ltr',
  shape,
  components,
  palette: {
    mode: 'dark',
    background: {
      default: grey[900],
      paper: grey[900],
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
      primary: grey[50],
      secondary: grey[200],
    },
  },
});
