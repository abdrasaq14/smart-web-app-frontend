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
import React from 'react';
import { Spinner } from '../Spinner';
import { useGetAlertHistory } from '../../api/operations/operationsHome/alertHistory';
import { formatDateForDisplay } from '../../utils/formatters';
import { DashboardFiltersProps } from '../../types';

type Props = { filters: DashboardFiltersProps };

export const AlertHistoryTable = ({ filters }: Props) => {
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [page, setPage] = React.useState(0);

	const { data, isLoading, isError } = useGetAlertHistory({
		pagination: { page, page_size: rowsPerPage },
		filters,
	});
	const dataToDisplay = data?.results ?? [];

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

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
						{dataToDisplay.map((row) => (
							<TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component="th" scope="row">
									{formatDateForDisplay(row.time)}
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
