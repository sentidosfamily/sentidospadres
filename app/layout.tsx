// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import ClientProvider from './context/clientProvider'; // un wrapper que sea "use client"

export const metadata = {
  title: 'Sentidos',
  description: 'Comunidad centrada en compartir experiencias',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
