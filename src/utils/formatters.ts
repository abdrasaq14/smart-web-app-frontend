import { format } from "date-fns";
export function formatDateForDisplay(date: string): string {
  // return format(new Date(date), 'EEE - dd LLL, HH:MM aa');
  return format(new Date(date), "yyyy-LL-dd, HH:MM aa");
}
