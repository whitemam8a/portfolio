import { Box } from '@mui/material';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'Daniil Sereda',
  description: 'Portfolio`s Daniil Sereda ',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // создаём CSS-переменную
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
            maxWidth: '1440px',
            mx: '40px',
          }}
        >
          {children}
        </Box>
      </body>
    </html>
  );
}
