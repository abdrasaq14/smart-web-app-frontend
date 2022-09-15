import React from 'react';
import ReactECharts from 'echarts-for-react';

type DataRow = {
	value: number;
	name: string;
};

type Props = {
	pieTitle: string;
	data: DataRow[];
};

const Page = ({ pieTitle, data }: Props) => {
	const options = {
		title: {
			text: pieTitle,
			left: 'center',
			top: 'center',
		},
		series: [
			{
				type: 'pie',
				data: data,
				radius: ['40%', '70%'],
			},
		],
	};

	return <ReactECharts option={options} />;
};

export default Page;
