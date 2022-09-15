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
import { getUserLogs } from '../api/operationsActivityLog/userLogs';

export const UserLogTable = () => {
	const { data, isLoading, isError } = useQuery(['userLogs'], getUserLogs);

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
						<TableCell>Alert ID</TableCell>
						<TableCell align="right">Time/Date</TableCell>
						<TableCell align="right">Modified by</TableCell>
						<TableCell align="right">Employee ID</TableCell>
						<TableCell align="right">Email address</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row, index) => (
						<TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell component="th" scope="row">
								{row.alertId}
							</TableCell>
							<TableCell align="right">{row.time}</TableCell>
							<TableCell align="right">{row.modifiedBy}</TableCell>
							<TableCell align="right">{row.employeeId}</TableCell>
							<TableCell align="right">{row.emailAddress}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
