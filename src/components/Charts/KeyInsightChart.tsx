import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { Spinner } from '../../componentes/Spinner';
import { useQuery } from 'react-query';
import ChartCard from '../ChartCard';
import { getKeyInsightsChart } from '../../api/operationsDashboard/keyInsightsChart';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

const styles = {
	container: {
		width: '220px',
		height: '360px',
		borderRadius: '16px',
		padding: '16px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	insights: { paddingTop: '8px', fontSize: '8px', lineHeight: '12px' },
};

export const KeyInsightsCard = () => {
	const { data, isLoading, isError } = useQuery(['getKeyInsightsChart'], getKeyInsightsChart);

	const renderBody = () => {
		if (isError) {
			return <Box>Error fetching data...</Box>;
		} else if (isLoading) {
			return <Spinner />;
		} else if (data && data?.insights.length > 0) {
			return (
				<Box sx={styles.insights}>
					<List>
						{data.insights.map((insight) => (
							<ListItem key={insight}>
								<ListItemIcon sx={{ minWidth: '24px' }}>
									<ElectricBoltIcon sx={{ color: 'rgb(250 200 88)', fontSize: '18px' }} />
								</ListItemIcon>
								<ListItemText secondary={insight} sx={{ fontSize: '8px' }} />
							</ListItem>
						))}
					</List>
				</Box>
			);
		} else {
			return <Box sx={styles.insights}>No insights</Box>;
		}
	};

	return <ChartCard title="Key Insights">{renderBody()}</ChartCard>;
};
