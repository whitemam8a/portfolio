import { Typography } from '@mui/material';

interface HeadingProps {
  children: string;
  className?: string;
}

export default function Heading({ children, className }: HeadingProps) {
  return (
    <h3 className={`font-normal text-gray-900 text-2xl md:text-4xl ${className}`}>{children}</h3>
  );
}
