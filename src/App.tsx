import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Mui components
import { CssBaseline } from '@mui/material';
// Ui components
import { PrivateLayout } from 'components';
// Contexts
import { ThemeProvider } from 'contexts';

/**
 * Main application component
 */
export const App: FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <CssBaseline />

        <Routes>
          <Route
            path="/"
            element={
              <PrivateLayout>
                <div> hello</div>
              </PrivateLayout>
            }
          />
          <Route path="public" element={<div>Public</div>} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
