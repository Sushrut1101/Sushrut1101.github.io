import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sushrut Gupta - Portfolio',
  description: 'Cybersecurity Enthusiast, Open Source Contributor, and Android Developer. Computer Science student at VIT Vellore specializing in cybersecurity, open source development, and Android systems.',
  keywords: 'Sushrut Gupta, Cybersecurity, Open Source, Android Developer, AOSP, Computer Science, VIT Vellore',
  authors: [{ name: 'Sushrut Gupta' }],
  creator: 'Sushrut Gupta',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sushrut-gupta.dev',
    title: 'Sushrut Gupta - Portfolio',
    description: 'Cybersecurity Enthusiast, Open Source Contributor, and Android Developer',
    siteName: 'Sushrut Gupta Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sushrut Gupta - Portfolio',
    description: 'Cybersecurity Enthusiast, Open Source Contributor, and Android Developer',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
