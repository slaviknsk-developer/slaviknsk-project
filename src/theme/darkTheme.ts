import { createTheme, PaletteOptions } from '@mui/material';
// Mui colors
import { grey, blue } from '@mui/material/colors';

const palette: PaletteOptions = {
  mode: 'dark',
  background: {
    default: '#121212',
    paper: '#181818',
  },
  divider: grey[900],
  primary: blue,
};

/**
 * Theme
 */
export const darkTheme = createTheme({
  direction: 'ltr',
  shape: { borderRadius: 8 },
  palette,
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: { fontWeight: 800, fontSize: '2.25rem', letterSpacing: '0.2px' },
        h2: { fontWeight: 700, fontSize: '1.5rem', letterSpacing: '0.1px' },
        h3: { fontWeight: 700, fontSize: '1.25rem' },
        h4: { fontWeight: 500, fontSize: '1rem' },
        h5: { fontWeight: 500, fontSize: '0.875rem' },
        h6: { fontWeight: 500, fontSize: '0.675rem' },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: `inset 0px -1px 1px ${palette?.divider}`,
          background: palette?.background?.default,
        },
      },
    },
  },
});
