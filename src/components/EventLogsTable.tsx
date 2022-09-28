import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import React from 'react';
import { useQuery } from 'react-query';
import { getEventLogs } from '../api/operations/operationsActivityLog/eventLogs';

export const EventLogsTable = () => {
	const { data, isLoading, isError } = useQuery(['eventLogs'], getEventLogs);

	if (isError) {
		return <div>There was an error...</div>;
	} else if (isLoading) {
		return <div>Loading...</div>;
	} else if (!data || data.length === 0) {
		return <div>Empty data</div>;
	}

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Time/Date</TableCell>
						<TableCell align="right">Alert ID</TableCell>
						<TableCell align="right">Site</TableCell>
						<TableCell align="right">Zone</TableCell>
						<TableCell align="right">District</TableCell>
						<TableCell align="right">Activity</TableCell>
						<TableCell align="right">Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row) => (
						<TableRow key={row.site} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell component="th" scope="row">
								{row.time}
							</TableCell>
							<TableCell align="right">{row.alertId}</TableCell>
							<TableCell align="right">{row.site}</TableCell>
							<TableCell align="right">{row.zone}</TableCell>
							<TableCell align="right">{row.district}</TableCell>
							<TableCell align="right">{row.activity}</TableCell>
							<TableCell align="right">{row.status}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
