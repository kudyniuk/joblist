import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { AuthTokenSetter } from '../Authorization';
import { Router } from './Router';
import { UnauthenticatedPage } from '../../pages';

export const AppViewResolver: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (!isAuthenticated || isLoading) {
    return (
      <UnauthenticatedPage />
    );
  }

  return (
    <AuthTokenSetter>
      <Router />
    </AuthTokenSetter>
  );
};
