import { FC } from 'react';
// Mui components
import { Tooltip, IconButton } from '@mui/material';
// Mui icons
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
// Contexts
import { useTheme } from 'contexts';

interface Props {}

/**
 * Theme switching component
 */
export const ThemeToggleIconButton: FC<Props> = () => {
  const { mode, toggleMode } = useTheme();

  const handleClick = () => {
    toggleMode();
  };

  return (
    <Tooltip title={mode === 'dark' ? 'Light mode' : 'Dark mode'}>
      <IconButton onClick={handleClick}>
        {mode === 'dark' ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
      </IconButton>
    </Tooltip>
  );
};
