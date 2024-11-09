// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import Counter from './Counter';


const PrivateRoute = () => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // adjust based on your auth method

  return isAuthenticated ? <Counter /> : <Navigate to="/login" />;
};

export default PrivateRoute;
