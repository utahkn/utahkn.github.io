// Tutoring resources by course, carried forward from the previous site's
// _posts/ review sessions and files/ folder. Files live in /public/resources/<course>/.
// To add a new course: add an entry here, and put its files under public/resources/<code>/.

export interface ResourceFile {
  label: string;
  href: string; // path under /public
}

export interface Course {
  code: string;
  name: string;
  resources: ResourceFile[];
}

export const courses: Course[] = [
  {
    code: 'EE 2347',
    name: 'Mathematical Foundations of Electrical Engineering',
    resources: [
      { label: 'Review Session Notes', href: '/resources/ee2347/Math_Found_Review.pdf' },
      { label: 'Review Session Notes (2)', href: '/resources/ee2347/mathfound-review-2.pdf' },
      { label: 'Chapter 13 Cheat Sheet', href: '/resources/ee2347/Math_Found_Review_Cheat_Sheet_CH13.pdf' },
    ],
  },
  {
    code: 'EE 2403',
    name: 'Electronics 1',
    resources: [
      { label: 'Fall 2015 Exam 1, Part A', href: '/resources/ee2403/EE2403_F15_Q1_A.pdf' },
      { label: 'Fall 2015 Exam 1, Part B', href: '/resources/ee2403/EE2403_F15_Q1_B.pdf' },
    ],
  },
  {
    code: 'EE 2415',
    name: 'Circuits 1',
    resources: [
      { label: 'Summer 2013 Midterm 1a', href: '/resources/ee2415/EE2415Su13MTE1a.pdf' },
    ],
  },
  {
    code: 'EE 2441',
    name: 'Digital Logic & Microprocessors',
    resources: [
      { label: 'Spring 2018 Review, Part 1', href: '/resources/ee2441/DL-spring2018-r1.pdf' },
      { label: 'Spring 2018 Review, Part 2', href: '/resources/ee2441/DL-spring2018-r2.pdf' },
    ],
  },
];

export const tutoringHoursTracker = '/resources/Tutoring_Hours_Tracker.pdf';
