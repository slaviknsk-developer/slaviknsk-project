import { FC } from 'react';
// Mui components
import { AppBar, Toolbar } from '@mui/material';

/**
 *
 */
export const AppHeader: FC = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>Menu</Toolbar>
    </AppBar>
  );
};
