import React from 'react';
import { Box, Card } from '@mui/material';

const styles = {
	container: {
		borderRadius: '16px',
		padding: '16px',
		display: 'flex',
		flexDirection: 'column',
		marginTop: '32px',
		width: '220px',
		height: '306px',
	},
	content: { paddingTop: '8px', fontWeight: 'bold', fontSize: '14px', lineHeight: '17px' },
};

const ChartCard = (props: React.PropsWithChildren<{ title: string; width?: string }>) => {
	return (
		<Card
			sx={{
				...styles.container,
				width: props.width ?? styles.container.width,
				maxWidth: props.width ?? styles.container.width,
			}}
			variant="outlined"
		>
			<Box sx={styles.content}>{props.title}</Box>
			{props.children}
		</Card>
	);
};

export default ChartCard;
