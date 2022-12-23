export const AttendanceStatus = {
  Present: 1,
  Undecided: 2,
  Absent: 3,
} as const;
export type AttendanceStatus =
  typeof AttendanceStatus[keyof typeof AttendanceStatus];
