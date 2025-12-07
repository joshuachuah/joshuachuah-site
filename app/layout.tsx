import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from './providers';
import PageLoadAnimation from '@/components/PageLoadAnimation';

export const metadata: Metadata = {
  title: 'Joshua Chuah - Portfolio',
  description: 'Full-stack developer portfolio showcasing projects, experience, and skills',
  keywords: ['Joshua Chuah', 'Portfolio', 'Full-stack Developer', 'Web Development'],
  authors: [{ name: 'Joshua Chuah' }],
  openGraph: {
    title: 'Joshua Chuah - Portfolio',
    description: 'Full-stack developer portfolio showcasing projects, experience, and skills',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <PageLoadAnimation>
            {children}
          </PageLoadAnimation>
        </ThemeProvider>
      </body>
    </html>
  );
}
