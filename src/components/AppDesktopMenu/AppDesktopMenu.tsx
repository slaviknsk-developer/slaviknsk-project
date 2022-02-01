import { FC } from 'react';
// Mui components
import { AppBar, Container, Box } from '@mui/material';
// Components
import { AppLogo, ThemeToggler } from 'components';

/**
 *
 */
export const AppDesktopMenu: FC = () => {
  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Container sx={{ minHeight: 56, display: 'flex', alignItems: 'center' }} maxWidth="lg">
        <AppLogo link />

        <Box sx={{ marginLeft: ({ spacing }) => spacing(3) }}>Menu</Box>

        <Box sx={{ marginLeft: 'auto' }}>
          <ThemeToggler variant="icon" size="small" />
        </Box>
      </Container>
    </AppBar>
  );
};
