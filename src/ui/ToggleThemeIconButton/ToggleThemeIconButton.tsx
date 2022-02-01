import { FC } from 'react';
// Mui components
import { PaletteMode, IconButtonProps, Tooltip, IconButton } from '@mui/material';
// Mui icons
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';

interface Props {
  mode: PaletteMode;
  iconButtonProps?: IconButtonProps;
  onClick?: () => void;
}

/**
 * Theme switcher with icon button
 */
export const ToggleThemeIconButton: FC<Props> = ({ mode, iconButtonProps, onClick }) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <Tooltip title={mode === 'dark' ? 'Light mode' : 'Dark mode'}>
      <IconButton onClick={handleClick} {...iconButtonProps}>
        {mode === 'dark' ? (
          <LightModeRoundedIcon fontSize={iconButtonProps?.size} />
        ) : (
          <DarkModeRoundedIcon fontSize={iconButtonProps?.size} />
        )}
      </IconButton>
    </Tooltip>
  );
};
