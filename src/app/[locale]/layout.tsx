import { Box } from '@mui/material';
import { Inter } from 'next/font/google';
import './globals.css';
import MuiProvider from '@/providers/MuiProvider';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import ScrollToTopButton from '@/components/ScroolToTop';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: 'Daniil Sereda',
  description: 'Portfolio`s Daniil Sereda ',
  icons: {
    icon: '/favicon/favicon.ico',
  },
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <MuiProvider>
          <NextIntlClientProvider>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                margin: '0 auto',
                bgcolor: '#edededff',
              }}
            >
              <Navbar />
              <Box sx={{ width: '100%', margin: '0 auto', maxWidth: '1440px' }}>{children}</Box>
              <Footer />
              <ScrollToTopButton />
            </Box>
          </NextIntlClientProvider>
        </MuiProvider>
      </body>
    </html>
  );
}
