/** Site-wide constants */

export const SITE_TITLE = 'Corner';
export const SITE_TAGLINE = 'Developer’s corner';
export const SITE_DESCRIPTION =
  'I build things, discover interesting projects, and share what I learn — tools, open-source finds, notes, and tutorials.';

export const AUTHOR = {
  name: 'Corner',
  handle: '@corner',
  email: 'hello@example.com',
  github: 'https://github.com',
  // Optional socials — leave empty string to hide
  x: '',
  bluesky: '',
};

/** Primary navigation */
export const NAV = [
  { label: 'Explore', href: '/explore/' },
  { label: 'Projects', href: '/explore/projects/' },
  { label: 'Posts', href: '/explore/posts/' },
  { label: 'About', href: '/about/' },
] as const;

/** Content type metadata for UI labels & filters */
export const TYPE_META = {
  project: {
    label: 'Projects',
    short: 'Project',
    description: 'Things I built — notes, links, and how to run them.',
    ownership: 'mine' as const,
  },
  github: {
    label: 'GitHub finds',
    short: 'GitHub',
    description: 'Open-source I discovered and recommend. Credit always goes to the author.',
    ownership: 'found' as const,
  },
  post: {
    label: 'Posts',
    short: 'Post',
    description: 'Short notes and thoughts. Not every entry needs a case study.',
    ownership: 'mine' as const,
  },
  tutorial: {
    label: 'Tutorials',
    short: 'Tutorial',
    description: 'How to install, run, or build — step by step.',
    ownership: 'mine' as const,
  },
  resource: {
    label: 'Resources',
    short: 'Resource',
    description: 'Links, tools, and references worth keeping.',
    ownership: 'found' as const,
  },
  video: {
    label: 'Videos',
    short: 'Video',
    description: 'Screen recordings and walkthroughs with voiceover.',
    ownership: 'mine' as const,
  },
} as const;

export type ContentType = keyof typeof TYPE_META;
