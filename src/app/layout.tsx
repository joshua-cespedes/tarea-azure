import './globals.css';

export const metadata = {
  title: 'Mi Landing Page',
  description: 'Landing page con Next.js y Azure',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}