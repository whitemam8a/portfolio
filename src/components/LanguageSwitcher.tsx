'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { FC } from 'react';

const locales = [
  { code: 'en', label: '🇬🇧', name: 'English' },
  { code: 'es', label: '🇪🇸', name: 'Español' },
  { code: 'ru', label: '🇷🇺', name: 'Русский' },
];

interface LanguageSwitcherProps {
  sx?: SxProps<Theme>;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ sx }) => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const isMobile = useMediaQuery('(max-width:600px)');

  const handleChange = (event: SelectChangeEvent) => {
    const nextLocale = event.target.value;
    const newPathname = pathname.replace(`/${locale}`, `/${nextLocale}`);

    startTransition(() => {
      router.push(newPathname);
    });
  };

  return (
    <FormControl>
      <InputLabel id="language-select-label"></InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={locale}
        onChange={handleChange}
        IconComponent={() => null}
        disableUnderline
        sx={{
          fontSize: 24,
          border: 'none',
          background: 'transparent',
          '& .MuiSelect-select': {
            p: 1,
            pr: '8px !important',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          '& fieldset': { border: 'none' },
          '&:hover': { backgroundColor: '#f2f2f2' },
          ...sx,
        }}
      >
        {locales.map((lang) => (
          <MenuItem
            key={lang.code}
            value={lang.code}
            sx={{
              display: 'flex',
              justifyContent: isMobile ? 'flex-start' : 'space-between',
              alignItems: 'center',
              px: 2,
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Box component="span" sx={{ fontSize: isMobile ? 18 : 24 }}>
                {lang.label}
              </Box>

              {isMobile && (
                <Typography component="span" sx={{ fontSize: isMobile ? 14 : 18 }}>
                  {lang.name}
                </Typography>
              )}
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSwitcher;
