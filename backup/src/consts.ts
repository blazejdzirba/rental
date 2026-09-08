// Globalne dane strony — importuj skąd chcesz: `import { NAV } from '../consts'`

export const SITE_TITLE = 'Najem KŚ';
export const SITE_DESCRIPTION =
	'Poradniki, kursy i gotowe narzędzia automatyzacji dla najmu krótkoterminowego (Airbnb, Booking, Beds24).';

// Menu główne — kolejność = kolejność w navbarze
export const NAV = [
	{ label: 'Start', href: '/' },
	{ label: 'Poradniki', href: '/blog' },
	{ label: 'Kursy', href: '/kursy' },
	{ label: 'Narzędzia', href: '/narzedzia' },
	{ label: 'Projekty', href: '/programy' },
	{ label: 'O mnie', href: '/about' },
] as const;

// Główny przycisk sprzedaży (navbar + CTA na stronie)
export const CTA_MAIN = { label: 'Automatyzacja pod klucz', href: '/automatyzacja' };

// Kontakt — {{DO_UZUPEŁNIENIA}}: podaj swoje dane
export const CONTACT = {
	telegram: '{{DO_UZUPEŁNIENIA}}', // np. https://t.me/twojanick
	email: '{{DO_UZUPEŁNIENIA}}', // np. kontakt@twojadomena.pl
};
