'use client'
import { ReactNode } from 'react';
import { UserProvider } from './userContext';

export default function ClientProvider({ children }: { children: ReactNode }) {
  return <UserProvider>{children}</UserProvider>;
}
