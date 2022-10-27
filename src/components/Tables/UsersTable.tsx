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
import { SitesDashboardFilters } from '../../types';
import { Spinner } from '../Spinner';
import { formatDateForDisplay } from '../../utils/formatters';
import { getUserName, useGetUsers } from '../../api/accountUI/users';
import TableMenu from '../TableMenu';
import FormDialog from '../Forms/FormDialog';
import UpdateUserForm from '../Forms/UpdateUserForm';
import { User } from '../../api/accountUI/users/types';

type Props = {
	filters: SitesDashboardFilters;
};

export const UsersTable = ({ filters }: Props) => {
	const [openUpdateDialog, setOpenUpdateDialog] = React.useState(false);
	const [selectedEntityId, setSelectedEntityId] = React.useState<null | number>(null);

	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [page, setPage] = React.useState(0);
	const [internalFilters, setInternalFilters] = useState(filters);

	const { data, isLoading, isError } = useGetUsers({
		pagination: { page, page_size: rowsPerPage },
		filters: internalFilters,
	});
	const dataToDisplay = data?.results ?? [];
	const selectedEntity = getEntityById<User>(dataToDisplay, selectedEntityId);

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
							<TableCell>Users</TableCell>
							<TableCell align="right">Company</TableCell>
							<TableCell align="right">Employee ID</TableCell>
							<TableCell align="right">Email address</TableCell>
							<TableCell align="right">Department</TableCell>
							<TableCell align="right">Time/Date</TableCell>
							<TableCell align="right"></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{dataToDisplay.map((row) => (
							<TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell align="right" component="th" scope="row">
									{getUserName(row)}
								</TableCell>
								<TableCell align="right">{row.companies[0]?.name ?? ''}</TableCell>
								<TableCell align="right">{row.employee_id}</TableCell>
								<TableCell align="right">{row.email}</TableCell>
								<TableCell align="right">{row.access_level}</TableCell>
								<TableCell align="right">{formatDateForDisplay(row.time)}</TableCell>
								<TableCell align="right">
									<TableMenu
										menuActions={[
											{
												label: 'Update',
												action: () => {
													console.log('update ', row.id);
													setSelectedEntityId(row.id);
													setOpenUpdateDialog(true);
												},
											},
											{
												label: 'Delete',
												action: () => {
													console.log('delete ', row.id);
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
				rowsPerPageOptions={[15]}
				component="div"
				count={data?.count ?? 0}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
			<FormDialog open={openUpdateDialog} setOpen={setOpenUpdateDialog} title="Update account">
				{selectedEntity != null ? (
					<UpdateUserForm
						user={selectedEntity}
						afterSubmit={() => {
							setOpenUpdateDialog(false);
						}}
					/>
				) : (
					'No user selected'
				)}
			</FormDialog>
		</Box>
	);
};

function getEntityById<T>(entityList: (T & { id: number })[], id: number | null) {
	if (id == null) {
		return undefined;
	}
	return entityList.find((entity) => entity.id === id);
}
