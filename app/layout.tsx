import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tavolos - Smart Restaurant Reservations',
  description: 'Reserve restaurant tables effortlessly with AI-powered Tavolos. Coming soon to Android and iOS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" forcedTheme='light' defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}