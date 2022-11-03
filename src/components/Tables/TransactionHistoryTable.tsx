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
import { formatDateForDisplay, formatToUSlocale } from '../../utils/formatters';
import TableMenu from '../TableMenu';
import FormDialog from '../Forms/FormDialog';
import { getEntityById } from '../../utils/utils';
import { ApiGetTransaction } from '../../api/finance/Home/transactionHistory/types';
import { useMutation, useQueryClient } from 'react-query';
import { del } from '../../api/apiUtils';
import UpdateTransactionForm from '../Forms/UpdateTransactionForm';

type Props = { filters: SitesDashboardFilters };

export const TransactionHistoryTable = ({ filters }: Props) => {
	const [openUpdateDialog, setOpenUpdateDialog] = React.useState(false);

	const [selectedEntityId, setSelectedEntityId] = React.useState<null | number>(null);

	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [page, setPage] = React.useState(0);
	const [internalFilters, setInternalFilters] = useState(filters);

	const { data, isLoading, isError } = useGetTransactionsHistory({
		pagination: { page, page_size: rowsPerPage },
		filters: internalFilters,
	});

	const dataToDisplay = data?.results ?? [];
	const selectedEntity = getEntityById<ApiGetTransaction>(dataToDisplay, selectedEntityId);

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
		(id: number): Promise<any> => {
			return del('transaction-history', id);
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('transaction-history');
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
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center">Site</TableCell>
							<TableCell align="center">Name</TableCell>
							<TableCell align="center">Date/Time</TableCell>
							<TableCell align="center">Ammount Billed</TableCell>
							<TableCell align="center">Ammount Collected</TableCell>
							<TableCell align="center">Duration</TableCell>
							<TableCell align="center"></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{dataToDisplay?.map((row) => (
							<TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell align="center" component="th" scope="row">
									{row.site_name}
								</TableCell>
								<TableCell align="center">{row.subscription}</TableCell>
								<TableCell align="center">{formatDateForDisplay(row.time)}</TableCell>
								<TableCell align="center">{formatToUSlocale(row.amount_billed)}</TableCell>
								<TableCell align="center">{formatToUSlocale(row.amount_bought)}</TableCell>
								<TableCell align="center">{`${row.days} days`}</TableCell>
								<TableCell align="right">
									<TableMenu
										menuActions={[
											{
												label: 'Update',
												action: () => {
													setSelectedEntityId(row.id);
													setOpenUpdateDialog(true);
												},
											},
											{
												label: 'Delete',
												action: () => {
													mutation.mutate(row.id);
												},
											},
										]}
									/>
								</TableCell>
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
			<FormDialog open={openUpdateDialog} setOpen={setOpenUpdateDialog} title="Update transaction">
				{selectedEntity != null ? (
					<UpdateTransactionForm
						entity={selectedEntity}
						afterSubmit={() => {
							setOpenUpdateDialog(false);
						}}
						filters={filters}
					/>
				) : (
					'No transaction selected'
				)}
			</FormDialog>
		</Box>
	);
};
