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
import { useGetDevices } from '../../api/accountUI/devices';
import { getEntityById } from '../../utils/utils';
import { useMutation, useQueryClient } from 'react-query';
import { del } from '../../api/apiUtils';
import TableMenu from '../TableMenu';
import { GetApiDevice } from '../../api/accountUI/devices/types';
import FormDialog from '../Forms/FormDialog';
import UpdateDeviceForm from '../Forms/UpdateDeviceForm';

type Props = {
	filters: SitesDashboardFilters;
};

export const DevicesTable = ({ filters }: Props) => {
	const [openUpdateDialog, setOpenUpdateDialog] = React.useState(false);
	const [selectedEntityId, setSelectedEntityId] = React.useState<null | string>(null);

	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [page, setPage] = React.useState(0);
	const [internalFilters, setInternalFilters] = useState(filters);

	const { data, isLoading, isError } = useGetDevices({
		pagination: { page, page_size: rowsPerPage },
		filters: internalFilters,
	});
	const dataToDisplay = data?.results ?? [];
	const selectedEntity = getEntityById<GetApiDevice>(dataToDisplay, selectedEntityId);

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
		(id: string): Promise<any> => {
			return del('devices', id);
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('devices');
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
							<TableCell>Device ID</TableCell>
							<TableCell align="right">Device Name</TableCell>
							<TableCell align="right">Company</TableCell>
							<TableCell align="right">Asset Type</TableCell>
							<TableCell align="right">Asset Capacity</TableCell>
							<TableCell align="right">Time/Date</TableCell>
							<TableCell align="right"></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{dataToDisplay.map((row) => (
							<TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell align="right" component="th" scope="row">
									{row.id}
								</TableCell>
								<TableCell align="right">{row.name}</TableCell>
								<TableCell align="right">{row.company.name}</TableCell>
								<TableCell align="right">{row.asset_type}</TableCell>
								<TableCell align="right">{row.asset_capacity}</TableCell>
								<TableCell align="right">{formatDateForDisplay(row.linked_at)}</TableCell>
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
				rowsPerPageOptions={[15]}
				component="div"
				count={data?.count ?? 0}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
			<FormDialog open={openUpdateDialog} setOpen={setOpenUpdateDialog} title="Update device">
				{selectedEntity != null ? (
					<UpdateDeviceForm
						entity={selectedEntity}
						afterSubmit={() => {
							setOpenUpdateDialog(false);
						}}
						filters={filters}
					/>
				) : (
					'No device selected'
				)}
			</FormDialog>
		</Box>
	);
};
