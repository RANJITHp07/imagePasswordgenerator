import React from 'react';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const token = localStorage.getItem('accessToken');
  const isLoggedIn = !!token; 

  const loggedInRestrictedRoutes = ['/login', '/signup'];
  const loggedOutRestrictedRoutes = ['/', '/profile'];

  const restrictedRoutes = isLoggedIn ? loggedInRestrictedRoutes : loggedOutRestrictedRoutes;
  const currentRoute = window.location.pathname;
  const isRestrictedRoute = restrictedRoutes.includes(currentRoute);

  // Redirect logic
  if (isRestrictedRoute && isLoggedIn) {
    return <Navigate to="/" replace />;
  } else if (isRestrictedRoute && !isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
