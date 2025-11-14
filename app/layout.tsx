// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import ClientProvider from './context/clientProvider'; // un wrapper que sea "use client"

export const metadata = {
  title: 'Sentidos Padres',
  description: 'Comunidad centrada en compartir experiencias',
  icons: {
    icon: 'favicon.ico',          // favicon
    apple: 'favicon.ico',          // iOS icon
  },
  openGraph: {
    title: 'Sentidos Padres',
    description: 'Comunidad centrada en compartir experiencias',
    images: ['/assets/sentidoslogo.png'],      // preview en redes sociales
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sentidos Padres',
    description: 'Comunidad centrada en compartir experiencias',
    images: ['/assets/sentidoslogo.png'],
  },
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
