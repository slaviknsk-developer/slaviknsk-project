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
}>({
  mode: defaultMode,
  toggleMode: () => {},
});

/**
 * Theme hook
 */
export const useTheme = () => useContext(ThemeContext);

/**
 * Mui5 theme provider
 */
export const ThemeProvider: FC = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>(defaultMode);

  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const value = useMemo(() => ({ mode, toggleMode }), [mode, toggleMode]);
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={value}>
      <Mui5ThemeProvider theme={theme}>{children}</Mui5ThemeProvider>
    </ThemeContext.Provider>
  );
};
