export function formatToUSlocale(value = 0): string {
	return value.toLocaleString('en-US');
}

const formatter = Intl.NumberFormat('en', { notation: 'compact' });
export function formatCompact(value = 0): string {
	return formatter.format(value);
}
