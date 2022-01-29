import { PaletteMode } from '@mui/material';
// Theme
import { lightTheme, darkTheme } from 'theme';

/**
 * Method return theme by current mode (light / dark)
 */
export const getTheme = (mode: PaletteMode) => {
  return mode === 'light' ? lightTheme : darkTheme;
};
