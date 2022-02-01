import { createTheme, PaletteOptions } from '@mui/material';
import { ShapeOptions } from '@mui/system';
// Mui colors
import { grey, blue } from '@mui/material/colors';

const shape: ShapeOptions = { borderRadius: 8 };

const palette: PaletteOptions = {
  mode: 'dark',
  background: {
    default: '#121212',
    paper: '#181818',
  },
  divider: grey[900],
  primary: blue,
  text: {
    primary: '#E7E7E7',
    secondary: '#888888',
    disabled: '#555555',
  },
};

/**
 * Theme
 */
export const darkTheme = createTheme({
  direction: 'ltr',
  shape,
  palette,
  components: {
    MuiTypography: {
      styleOverrides: {
        root: { fontFamily: `'Open Sans', sans-serif` },
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
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: shape?.borderRadius,
          border: `1px solid ${palette?.divider}`,
        },
      },
    },
  },
});
