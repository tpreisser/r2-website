import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

// R2 Custom Font (map same file to common weights so bold doesn't fall back)
export const r2Font = localFont({
  src: [
    { path: './R2Font.ttf', weight: '400', style: 'normal' },
    { path: './R2Font.ttf', weight: '500', style: 'normal' },
    { path: './R2Font.ttf', weight: '600', style: 'normal' },
    { path: './R2Font.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-r2',
  display: 'swap',
});

// Secondary font for body / fallback glyphs
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});
