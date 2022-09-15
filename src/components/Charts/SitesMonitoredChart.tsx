import React from 'react';
import PieChart from '../PieChart';
import { ApiSitesMonitored } from '../../api/operationsHome/types';

const Page = ({ data: apiData }: { data: ApiSitesMonitored }) => {
	const keyLabelMapping: any = {
		active: 'Active',
		offline: 'Offline',
	};
	const data = apiData.data.map((apiDataRow) => {
		return {
			name: keyLabelMapping[apiDataRow.key] ?? '',
			value: apiDataRow.value,
		};
	});

	return (
		<PieChart cardTitle="Site monitored" pieTitle={`${apiData.total} Locations`} data={data} />
	);
};

export default Page;
