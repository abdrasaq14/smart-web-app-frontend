export const sleep = async (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export function getEntityById<T>(
	entityList: (T & { id: number | string })[],
	id: number | null | string
) {
	if (id == null) {
		return undefined;
	}
	return entityList.find((entity) => entity.id === id);
}

export const handleEmailClick = (type: string) => {
	const email = 'reach@smarterise.com';
	const subject = encodeURIComponent(`Request to add new ${type}`);
	const body = encodeURIComponent(
		`Hi Smarterise Team,\n\nI would like to request to add a new ${type} to the system.\n\nBest Regards,\n`
	);
	const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

	window.location.href = mailtoLink;
};