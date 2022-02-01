import { FC, useCallback } from 'react';
// Mui components
import { PaletteMode } from '@mui/material';
// Contexts
import { useTheme } from 'contexts';
// Ui components
import { ToggleThemeButtonGroup, ToggleThemeIconButton } from 'ui';

type CommonProps = {
  variant?: 'icon' | 'buttonGroup';
  size?: 'small' | 'medium' | 'large';
};

type IconTogglerProps = CommonProps;

type ButtonGroupTogglerProps = CommonProps & {
  color?: 'standard' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
};

interface Props extends IconTogglerProps, ButtonGroupTogglerProps {}

/**
 * Theme switching component
 */
export const ThemeToggler: FC<Props> = ({ variant = 'icon', size, color }) => {
  const { mode, toggleMode, setMode } = useTheme();

  const handleClickIconToggler = useCallback(() => {
    toggleMode();
  }, [toggleMode]);

  const handleChangeButtonGroupToggler = useCallback(
    (newMode: PaletteMode) => {
      setMode(newMode);
    },
    [setMode]
  );

  return variant === 'icon' ? (
    <ToggleThemeIconButton
      mode={mode}
      onClick={handleClickIconToggler}
      iconButtonProps={{ size }}
    />
  ) : (
    <ToggleThemeButtonGroup
      mode={mode}
      onChange={handleChangeButtonGroupToggler}
      toggleButtonGroupProps={{ size, color }}
    />
  );
};
