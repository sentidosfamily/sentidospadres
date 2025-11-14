'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

// ============ TYPES ============
export interface User {
  id: string;
  name: string;
  avatar: string;
  rol: 'admin' | 'user' | 'moderator';
}

interface UserContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// ============ CONTEXT ============
const UserContext = createContext<UserContextType | undefined>(undefined);

// ============ PROVIDER ============
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    // Simulación de login
    setTimeout(() => {
      setUser({
        id: '1',
        name: 'María García',
        avatar: 'https://i.pravatar.cc/150?img=5',
        rol: 'user'
      });
      setIsLoading(false);
    }, 1000);
  };

  const logout = (): void => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// ============ HOOK ============
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser debe usarse dentro de UserProvider');
  }
  return context;
};