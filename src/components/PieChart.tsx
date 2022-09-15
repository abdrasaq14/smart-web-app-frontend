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
			top: '30%',
		},
		legend: {
			top: 'bottom',
		},
		series: [
			{
				type: 'pie',
				data: data,
				radius: ['40%', '70%'],
				center: ['50%', '35%'],
				avoidLabelOverlap: false,
				label: {
					show: false,
					position: 'center',
				},
				emphasis: {
					label: {
						show: true,
						fontSize: '20',
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
