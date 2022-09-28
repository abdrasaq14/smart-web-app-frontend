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
import { ApiTransactionHistory } from '../api/operations/operationsActivityLog/transactionHistory/types';

type Props = {
	data: ApiTransactionHistory;
};

export const TransactionHistoryTable = ({ data }: Props) => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Site</TableCell>
						<TableCell align="right">Subscription</TableCell>
						<TableCell align="right">Date/Time</TableCell>
						<TableCell align="right">Amount Billed</TableCell>
						<TableCell align="right">Amount Bought</TableCell>
						<TableCell align="right">Duration</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row) => (
						<TableRow key={row.site} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell component="th" scope="row">
								{row.site}
							</TableCell>
							<TableCell align="right">{row.subscription}</TableCell>
							<TableCell align="right">{row.time}</TableCell>
							<TableCell align="right">{row.amountBilled}</TableCell>
							<TableCell align="right">{row.amountBought}</TableCell>
							<TableCell align="right">{row.duration}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
