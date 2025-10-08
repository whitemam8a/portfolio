import { Box } from '@mui/material';
import { Inter } from 'next/font/google';
import './globals.css';
import MuiProvider from '@/providers/MuiProvider';

export const metadata = {
  title: 'Daniil Sereda',
  description: 'Portfolio`s Daniil Sereda ',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <MuiProvider>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              maxWidth: '1440px',
              margin: '0 auto',
            }}
          >
            {children}
          </Box>
        </MuiProvider>
      </body>
    </html>
  );
}
