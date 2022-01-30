import { FC } from 'react';
// Mui components
import { AppBar, Container, Box } from '@mui/material';
// Components
import { ThemeToggleIconButton, ThemeToggleButtonGroup } from 'components';

/**
 *
 */
export const AppHeader: FC = () => {
  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Container sx={{ minHeight: 56, display: 'flex', alignItems: 'center' }} maxWidth="lg">
        <Box>Logo</Box>

        <Box>Menu</Box>

        <Box sx={{ marginLeft: 'auto' }}>
          <ThemeToggleButtonGroup size="small" />
          <ThemeToggleButtonGroup />
          <ThemeToggleButtonGroup size="large" />
        </Box>
      </Container>
    </AppBar>
  );
};
