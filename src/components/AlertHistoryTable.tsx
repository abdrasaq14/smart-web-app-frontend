import {
	Box,
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
import { getAlertHistory } from '../api/operationsHome/alertHistory';
import { Spinner } from '../componentes/Spinner';

type Props = {};

export const AlertHistoryTable = ({}: Props) => {
	const { data, isLoading, isError } = useQuery(['alertHistory'], getAlertHistory);

	if (isLoading) {
		return <Spinner />;
	} else if (isError) {
		return <Box>Error fetching data...</Box>;
	}

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Date/Time</TableCell>
						<TableCell align="right">Alert ID</TableCell>
						<TableCell align="right">Site</TableCell>
						<TableCell align="right">Zone</TableCell>
						<TableCell align="right">District</TableCell>
						<TableCell align="right">Activity</TableCell>
						<TableCell align="right">Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data?.results.map((row) => (
						<TableRow key={row.site} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell component="th" scope="row">
								{row.time}
							</TableCell>
							<TableCell align="right">{row.alert_id}</TableCell>
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
