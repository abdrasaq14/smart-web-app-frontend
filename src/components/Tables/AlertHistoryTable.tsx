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
import { Spinner } from '../Spinner';
import { useGetAlertHistory } from '../../api/operations/operationsHome/alertHistory';
import { formatDateForDisplay } from '../../utils/formatters';
import { SitesDashboardFilters } from '../../types';
import TableMenu from '../TableMenu';
import { useMutation, useQueryClient } from 'react-query';
import { patchWithId } from '../../api/apiUtils';
import { ApiAlertHistoryRow } from '../../api/operations/operationsHome/alertHistory/types';

type Props = { filters: SitesDashboardFilters };

const NUMBER_OF_ITEMS = 4;

export const AlertHistoryTable = ({ filters }: Props) => {
	const [rowsPerPage, setRowsPerPage] = React.useState(NUMBER_OF_ITEMS);
	const [page, setPage] = React.useState(0);
	const [internalFilters, setInternalFilters] = useState(filters);

	const { data, isLoading, isError } = useGetAlertHistory({
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

	const queryClient = useQueryClient();
	const mutation = useMutation(
		(newDevice: ApiAlertHistoryRow): Promise<any> => {
			return patchWithId('alerts', newDevice.id, { status: 'completed' });
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('alerts');
				queryClient.invalidateQueries('operations/cards-data');
			},
		}
	);

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
						<Table
							sx={{
								minWidth: 650,
							}}
							aria-label="simple table"
						>
							<TableHead>
								<TableRow>
									<TableCell>Date/Time</TableCell>
									<TableCell align="center">Alert ID</TableCell>
									<TableCell align="center">Site</TableCell>
									<TableCell align="center">Zone</TableCell>
									<TableCell align="center">District</TableCell>
									<TableCell align="center">Activity</TableCell>
									<TableCell align="center">Status</TableCell>
									<TableCell align="center"></TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{dataToDisplay.map((row:any) => (
									<TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
										<TableCell component="th" scope="row" sx={{ padding: 0 }} align="center">
											{formatDateForDisplay(row.time)}
										</TableCell>
										<TableCell align="center" sx={{ paddingLeft: 0, paddingRight: 0 }}>
											{row.alert_id}
										</TableCell>
										<TableCell align="center" sx={{ padding: 0 }}>
											{row.site}
										</TableCell>
										<TableCell align="center" sx={{ padding: 0 }}>
											{row.zone}
										</TableCell>
										<TableCell align="center" sx={{ padding: 0 }}>
											{row.district}
										</TableCell>
										<TableCell align="center" sx={{ padding: 0 }}>
											{row.activity}
										</TableCell>
										<TableCell align="center" sx={{ padding: 0 }}>
											{row.status}
										</TableCell>
										<TableCell align="center" sx={{ padding: 0 }}>
											{row.status === 'pending' ? (
												<TableMenu
													menuActions={[
														{
															label: 'Resolved',
															action: () => {
																mutation.mutate(row);
															},
														},
													]}
												/>
											) : null}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						rowsPerPageOptions={[NUMBER_OF_ITEMS]}
						component="div"
						count={data?.count ?? 0}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</>
			) : (
				<p style={{ fontSize: '16px' }}>No Alert at the moment</p>
			)}
		</Box>
	);
};
