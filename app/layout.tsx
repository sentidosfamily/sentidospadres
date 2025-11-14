// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import ClientProvider from './context/clientProvider';

export const metadata = {
  title: 'Sentidos Padres',
  description: 'Comunidad centrada en compartir experiencias',
  icons: {
    icon: '/assets/Sentidoslogo.png',           // favicon principal
    shortcut: '/assets/sentidoslogo.png',       // shortcut icon
    apple: '/assets/Sentidoslogo.png',          // iOS icon
  },
  openGraph: {
    title: 'Sentidos Padres',
    description: 'Comunidad centrada en compartir experiencias',
    images: ['/assets/Sentidoslogo.png'],
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sentidos Padres',
    description: 'Comunidad centrada en compartir experiencias',
    images: ['/assets/Sentidoslogo.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Favicon adicionales para mejor compatibilidad */}
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/Sentidoslogo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/Sentidoslogo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/Sentidoslogo.png" />
      </head>
      <body>
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
