// Add a new nav tab by appending one entry to this array.
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', href: '/projects' },
  { label: 'Writing', href: '/essays' },
  { label: 'About', href: '/about' },
  { label: 'GitHub', href: 'https://github.com/itsjustsmilly', external: true },
];
