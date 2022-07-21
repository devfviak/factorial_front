/* eslint-disable react/prop-types */
import React, { createContext, useState, useContext, useEffect } from 'react';

import { currentUser } from '../api/auth';

const AuthContext = createContext({ user: null, loading: true });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const onSingIn = () => {
    currentUser()
      .then((response) => { setUser(response.data); })
      .catch((_error) => setUser(null))
      .finally(() => setLoading(false));
  };

  const onSignOut = () => {
    setUser(null);
  };

  useEffect(onSingIn, []);

  return (
    <AuthContext.Provider value={{ user, loading, onSingIn, onSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
