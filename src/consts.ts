// Globalne dane strony — importuj skąd chcesz: `import { NAV } from '../consts'`

export const SITE_TITLE = 'RentalDev';
export const SITE_DESCRIPTION =
  'Twoja baza wiedzy o automatyzacji najmu krótkoterminowego.';

// Menu główne — kolejność = kolejność w navbarze
export const NAV = [
  { label: 'Start', href: '/' },
  { label: 'Narzędzia', href: '/narzedzia' },
  { label: 'Poradniki', href: '/blog' },
  { label: 'Projekty', href: '/programy' },
  { label: 'Wideo', href: '/wideo' },
  { label: 'O stronie', href: '/about' },
] as const;

// Kontakt — {{DO_UZUPEŁNIENIA}}: podaj swoje dane
export const CONTACT = {
  telegram: '{{DO_UZUPEŁNIENIA}}', // np. https://t.me/twojanick
  email: '{{DO_UZUPEŁNIENIA}}', // np. kontakt@twojadomena.pl
};
