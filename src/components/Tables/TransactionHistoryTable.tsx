import {
	Box,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useGetTransactionsHistory } from '../../api/finance/Home/transactionHistory';
import { Spinner } from '../Spinner';
import { SitesDashboardFilters } from '../../types';

type Props = { filters: SitesDashboardFilters };

export const TransactionHistoryTable = ({ filters }: Props) => {
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [page, setPage] = React.useState(0);
	const [internalFilters, setInternalFilters] = useState(filters);

	const { data, isLoading, isError } = useGetTransactionsHistory({
		pagination: { page, page_size: rowsPerPage },
		filters: internalFilters,
	});

	const dataToDisplay = data?.results ?? [];

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	useEffect(() => {
		//TODO: when filters are changed, we want to reset the pagination. find a better way to do this
		setPage(0);
		setInternalFilters(filters);
	}, [filters]);

	if (isLoading) {
		return <Spinner />;
	} else if (isError) {
		return <Box>Error fetching data...</Box>;
	}

	return (
		<Box>
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
						{dataToDisplay?.map((row) => (
							<TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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
			<TablePagination
				rowsPerPageOptions={[5]}
				component="div"
				count={data?.count ?? 0}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Box>
	);
};
