import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email) => {
    setIsLoading(true);
    try {
      // Simular chamada à API
      const userData = {
        id: Math.random().toString(),
        email: email,
        name: email.split('@')[0],
      };
      setUser(userData);
      setIsLoading(false);
      return userData;
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  const logout = () => {
    setIsLoading(true);
    try {
      // Simular chamada à API
      setUser(null);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  const register = async (userData) => {
    setIsLoading(true);
    try {
      // Simular chamada à API
      const newUser = {
        id: Math.random().toString(),
        ...userData,
      };
      setUser(newUser);
      setIsLoading(false);
      return newUser;
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  const value = {
    user,
    isLoading,
    login,
    logout,
    register,
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};
