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

export const siteData: {
	id: number;
	name: string;
	description: string;
	position: [number, number];
	link: string;
	isRed?: boolean;
}[] = [
	{
		id: 4,
		name: 'C407',
		description: 'MINISTERE DE LA SANTE',
		position: [6.365137, 2.462924],
		link: '/operations/dashboard/4',
		isRed: true,
	},
	{
		id: 5,
		name: 'C615',
		description: 'C/42',
		position: [6.369344, 2.487156],
		link: '/operations/dashboard/5',
	},
	{
		id: 6,
		name: 'C147',
		description: 'SOBETEX',
		position: [6.367326, 2.481597],
		link: '/operations/dashboard/6',
	},
	{
		id: 7,
		name: 'C306',
		description: 'LOT 67',
		position: [6.36405, 2.482518],
		link: '/operations/dashboard/7',
		isRed: true,
	},
	{
		id: 8,
		name: 'C102',
		description: 'KPOGBEMABOU',
		position: [6.363438, 2.471388],
		link: '/operations/dashboard/8',
		isRed: true,
	},
	{
		id: 9,
		name: 'C188',
		description: 'Hotel PLM',
		position: [6.35878, 2.461762],
		link: '/operations/dashboard/9',
	},
	{
		id: 10,
		name: 'C304',
		description: 'CFRAE',
		position: [6.362441, 2.461107],
		link: '/operations/dashboard/10',
	},
	{
		id: 11,
		name: 'C290',
		description: 'SIBIC',
		position: [6.367756, 2.471697],
		link: '/operations/dashboard/11',
		isRed: true,
	},
	{
		id: 17,
		name: 'C363',
		description: 'LOT109',
		position: [6.364349, 2.489321],
		link: '/operations/dashboard/17',
	},
	{
		id: 20,
		name: 'C362',
		description: 'FACE CEG LITTORAL',
		position: [6.365328, 2.493032],
		link: '/operations/dashboard/20',
	},
	{
		id: 21,
		name: 'C359',
		description: 'LOT112',
		position: [6.365046, 2.482518],
		link: '/operations/dashboard/21',
	},
	{
		id: 22,
		name: 'C358',
		description: 'LOT115',
		position: [6.363738, 2.478189],
		link: '/operations/dashboard/22',
	},
	{
		id: 24,
		name: 'C119',
		description: 'SOBEPEC',
		position: [6.364879, 2.46485],
		link: '/operations/dashboard/24',
	},
	{
		id: 31,
		name: 'C025',
		description: 'NO ADDRESS',
		position: [6.368362, 2.484064],
		link: '/operations/dashboard/31',
	},
	{
		id: 35,
		name: 'C098',
		description: 'NO ADDRESS (ROAD SIDE)',
		position: [6.36548, 2.461187],
		link: '/operations/dashboard/35',
	},
	{
		id: 36,
		name: 'C070',
		description: 'ZHEJIANG TANBEN TRANSFORMER',
		position: [6.361484, 2.463042],
		link: '/operations/dashboard/36',
	},
	{
		id: 40,
		name: 'C132',
		description: 'OFFICE NOTARIAL APPUIE LA SECURITE ALIMENTAIRE',
		position: [6.364777, 2.469224],
		link: '/operations/dashboard/40',
	},
	{
		id: 41,
		name: 'C229',
		description: 'SCIL BENIN',
		position: [6.365783, 2.467369],
		link: '/operations/dashboard/41',
	},
	];

	export const values = {
		total_revenue: '76.93T',
		atc_losses: 15,
		total_consumption: 354178,
		current_load: 242.31,
		number_of_sites: 5,
		number_of_users: 2,
		pending_alerts: 0,
		avg_availability: 3000,
		downtime_losses: 100000,
		revenue_per_hour: '1M'
	};