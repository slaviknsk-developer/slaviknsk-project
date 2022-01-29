import { FC } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
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
    <div>
      <AppHeader />
    </div>
  );
};
