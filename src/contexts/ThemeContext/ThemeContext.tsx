import { FC, useState, createContext, useContext, useCallback, useMemo } from 'react';
// Mui components
import { PaletteMode, ThemeProvider as Mui5ThemeProvider } from '@mui/material';
// Theme
import { getTheme } from 'theme';

const defaultMode: PaletteMode = 'light';

/**
 * Theme context
 */
const ThemeContext = createContext<{
  mode: PaletteMode;
  toggleMode: () => void;
  setMode: (mode: PaletteMode) => void;
}>({
  mode: defaultMode,
  toggleMode: () => {},
  setMode: (_mode) => {},
});

/**
 * Theme hook
 */
export const useTheme = () => useContext(ThemeContext);

/**
 * Mui5 theme provider
 */
export const ThemeProvider: FC = ({ children }) => {
  const [paletteMode, setPaletteMode] = useState<PaletteMode>(defaultMode);

  const toggleMode = useCallback(() => {
    setPaletteMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const setMode = useCallback((mode: PaletteMode) => {
    setPaletteMode(mode);
  }, []);

  const value = useMemo(
    () => ({ mode: paletteMode, toggleMode, setMode }),
    [paletteMode, toggleMode, setMode]
  );

  const theme = useMemo(() => getTheme(paletteMode), [paletteMode]);

  return (
    <ThemeContext.Provider value={value}>
      <Mui5ThemeProvider theme={theme}>{children}</Mui5ThemeProvider>
    </ThemeContext.Provider>
  );
};
