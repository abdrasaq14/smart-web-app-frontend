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
import { useGetEventLogs } from '../../api/operations/operationsActivityLog/eventLogs';
import { SitesDashboardFilters } from '../../types';
import { Spinner } from '../Spinner';
import { formatDateForDisplay } from '../../utils/formatters';

type Props = {
	filters: SitesDashboardFilters;
};

export const EventLogsTable = ({ filters }: Props) => {
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [page, setPage] = React.useState(0);
	const [internalFilters, setInternalFilters] = useState(filters);

	const { data, isLoading, isError } = useGetEventLogs({
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
			{dataToDisplay.length > 0 ? (
			<>
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
				rowsPerPageOptions={[15]}
				component="div"
				count={data?.count ?? 0}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
				</>
			) : 
			<p style={{fontSize: '16px', }}>No Log at the moment</p> }
		</Box>
	);
};
