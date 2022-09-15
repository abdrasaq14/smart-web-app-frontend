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
		legend: {
			top: '5%',
			left: 'center',
		},
		series: [
			{
				type: 'pie',
				data: data,
				radius: ['40%', '70%'],
				avoidLabelOverlap: false,
				label: {
					show: false,
					position: 'center',
				},
				emphasis: {
					label: {
						show: true,
						fontSize: '40',
						fontWeight: 'bold',
					},
				},
				labelLine: {
					show: false,
				},
			},
		],
	};

	return <ReactECharts option={options} />;
};

export default Page;
