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
import { Dashboard } from '@mui/icons-material';
import { IconButton } from '../IconButton';
import { useNavigate } from 'react-router-dom';
import { SitesDashboardFilters } from '../../types';
import { Spinner } from '../Spinner';
import { useGetSites } from '../../api/operations/operationsSites';
import { formatDateForDisplay } from '../../utils/formatters';

type Props = {
	filters: SitesDashboardFilters;
};

export const SitesTable = ({ filters }: Props) => {
	const navigate = useNavigate();
	const [rowsPerPage, setRowsPerPage] = React.useState(7);
	const [page, setPage] = React.useState(0);
	const [internalFilters, setInternalFilters] = useState(filters);

	const { data, isLoading, isError } = useGetSites({
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
							<TableCell>Asset name</TableCell>
							<TableCell align="center">Site</TableCell>
							<TableCell align="center">Asset Type</TableCell>
							<TableCell align="center">Asset co-ordinate</TableCell>
							<TableCell align="center">Asset capacity (kVA)</TableCell>
							<TableCell align="center">Time/Date</TableCell>
							<TableCell align="center"></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{dataToDisplay.map((row) => (
							<TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell align="center" component="th" scope="row">
									{row.asset_name}
								</TableCell>
								<TableCell align="center">{row.name}</TableCell>
								<TableCell align="center">{row.asset_type}</TableCell>
								<TableCell align="center">{row.asset_co_ordinate}</TableCell>
								<TableCell align="center">{row.asset_capacity}</TableCell>
								<TableCell align="center">{formatDateForDisplay(row.time)}</TableCell>
								<TableCell align="center">
									<IconButton
										round
										Icon={Dashboard}
										onClick={() => navigate('/operations/dashboard')}
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
		</Box>
	);
};
