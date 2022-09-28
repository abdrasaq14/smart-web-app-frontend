import { format } from 'date-fns';

export function formatToUSlocale(value = 0): string {
	return value.toLocaleString('en-US');
}

const formatter = Intl.NumberFormat('en', { notation: 'compact' });
export function formatCompact(value = 0): string {
	return formatter.format(value);
}

export function formatDate(date: string): string {
	return format(new Date(date), 'EEE - dd LLL, HH:MM aa');
}
