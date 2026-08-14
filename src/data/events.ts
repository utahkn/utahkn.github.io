// Upcoming and past chapter events.
// To update: edit this array. Events are shown newest-first automatically by date.
// Use ISO date strings (YYYY-MM-DD) so sorting works correctly.

export interface ChapterEvent {
  title: string;
  date: string; // YYYY-MM-DD
  location?: string;
  description?: string;
}

export const events: ChapterEvent[] = [
  {
    title: 'TODO: Add your next event',
    date: '2026-09-01',
    location: 'Nedderman Hall, Room 132',
    description: 'Replace this with a real event — general meeting, induction ceremony, tutoring kickoff, social, etc.',
  },
];
