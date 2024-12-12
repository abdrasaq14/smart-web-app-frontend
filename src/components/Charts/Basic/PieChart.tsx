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
	console.log('pieChartData', data);
	const options = {
		title: {
			text: pieTitle,
			left: 'center',
			bottom: '20%',
		},
		legend: {
			top: 'bottom',
			data: data.map((item) => ({
				name: item.name,
				icon: 'rect', // Shape of the icon
				itemStyle: {
					color:
						item.name.includes('Good') ||
						item.name.includes('Active') ||
						item.name.includes('Actual')
							? '#FFC000'
							: '#7C878E', // Dynamically set the box color
				},
			})),
		},
		series: [
			{
				type: 'pie',
				data: data.map((item) => ({
					...item,
					itemStyle: {
						color:
							item.name.includes('Good') ||
							item.name.includes('Active') ||
							item.name.includes('Actual')
								? '#FFC000'
								: '#7C878E', // Pie chart segment color
					},
				})),
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
