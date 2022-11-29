/* eslint-disable no-undef */
// @ts-nocheck
import React, { useEffect } from 'react';
import Dashboard from '../dashboard/Dashboard';
import Application from './Application';
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return (
    <div>
      <Dashboard />

      <Application />
    </div>
  );
};

export default App;
