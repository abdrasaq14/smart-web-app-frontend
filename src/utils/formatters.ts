import { format } from 'date-fns';

export function formatToUSlocale(value = 0): string {
	return value.toLocaleString('en-US');
}

const formatter = Intl.NumberFormat('en', { notation: 'compact' });
export function formatCompact(value = 0): string {
	return formatter.format(value);
}

export function formatDateForDisplay(date: string): string {
	return format(new Date(date), 'EEE - dd LLL, HH:MM aa');
}

export function formatDateForFilter(date: Date): string {
	return format(date, 'yyyy-LL-dd');
}

export function formatDateForApi(date: string): string {
	return format(new Date(date), 'yyyy-LL-dd');
}
