import { FC, MouseEvent } from 'react';
// Mui components
import {
  PaletteMode,
  ToggleButtonGroup,
  ToggleButton,
  ToggleButtonGroupProps,
} from '@mui/material';
// Mui icons
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
// Contexts
import { useTheme } from 'contexts';

interface Props extends ToggleButtonGroupProps {}

/**
 * Theme switching component
 */
export const ThemeToggleButtonGroup: FC<Props> = (props) => {
  const { mode, setMode } = useTheme();

  const handleChange = (_: MouseEvent<HTMLElement>, newMode: PaletteMode) => {
    setMode(newMode);
  };

  return (
    <ToggleButtonGroup value={mode} color="primary" exclusive onChange={handleChange} {...props}>
      {mode === 'dark' ? (
        <ToggleButton value="light">
          <LightModeRoundedIcon fontSize={props.size} />
        </ToggleButton>
      ) : (
        <ToggleButton value="dark">
          <DarkModeRoundedIcon fontSize={props.size} />
        </ToggleButton>
      )}
    </ToggleButtonGroup>
  );
};
