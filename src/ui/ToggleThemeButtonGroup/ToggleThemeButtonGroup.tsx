import { FC, MouseEvent, useMemo } from 'react';
// Mui components
import {
  PaletteMode,
  ToggleButtonGroupProps,
  SvgIcon,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
// Mui icons
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';

type ThemeButtonConfig = {
  value: PaletteMode;
  IconComponent: typeof SvgIcon;
};

interface Props {
  mode: PaletteMode;
  toggleButtonGroupProps?: ToggleButtonGroupProps;
  onChange?: (newMode: PaletteMode) => void;
}

/**
 * Theme switcher with button group
 */
export const ToggleThemeButtonGroup: FC<Props> = ({ mode, toggleButtonGroupProps, onChange }) => {
  const handleChange = (_: MouseEvent<HTMLElement>, newMode: PaletteMode) => {
    if (onChange) onChange(newMode);
  };

  const themeButtons = useMemo<ThemeButtonConfig[]>(
    () => [
      { value: 'light', IconComponent: LightModeRoundedIcon },
      { value: 'dark', IconComponent: DarkModeRoundedIcon },
    ],
    []
  );

  return (
    <ToggleButtonGroup
      value={mode}
      color="primary"
      exclusive
      onChange={handleChange}
      {...toggleButtonGroupProps}
    >
      {themeButtons.map(({ value, IconComponent }) => (
        <ToggleButton key={value} value={value}>
          <IconComponent fontSize={toggleButtonGroupProps?.size} />
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
