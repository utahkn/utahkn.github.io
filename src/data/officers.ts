// Officer roster for the current academic year.
// To update: edit this array. Each entry becomes one card on the Officers page.
// Photos are optional — leave `photo` unset to show initials instead.

export interface Officer {
  name: string;
  role: string;
  major?: string;
  photo?: string; // path under /public, e.g. "/images/officers/jane-doe.jpg"
  email?: string;
}

export const officers: Officer[] = [
  {
    name: 'TODO: Add Name',
    role: 'President',
  },
  {
    name: 'TODO: Add Name',
    role: 'Vice President',
  },
  {
    name: 'TODO: Add Name',
    role: 'Recording Secretary',
  },
  {
    name: 'TODO: Add Name',
    role: 'Corresponding Secretary',
  },
  {
    name: 'TODO: Add Name',
    role: 'Treasurer',
  },
  {
    name: 'TODO: Add Name',
    role: 'Bridge Correspondent',
  },
  {
    name: 'TODO: Add Name',
    role: 'Historian',
  },
];
