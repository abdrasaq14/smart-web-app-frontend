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
import { ApiAlertHistory } from '../api/alertHistory/types';

type Props = {
	data: ApiAlertHistory;
};

export const AlertHistoryTable = ({ data }: Props) => {
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
					{data.map((row) => (
						<TableRow key={row.site} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell component="th" scope="row">
								{row.time}
							</TableCell>
							<TableCell align="right">{row.id}</TableCell>
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
