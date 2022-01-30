import { FC } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
// Mui components
import {Card} from '@mui/material'
// Components
import { AppHeader } from 'ui';

/**
 * Layout component for authorized user
 */
export const PrivateLayout: FC = () => {
  const auth = true;
  const location = useLocation();

  if (!auth) return <Navigate to="/public" state={{ from: location }} replace />;

  return (
    <>
      <AppHeader />
      <Card variant='outlined'>asdsads</Card>
    </>
  );
};
