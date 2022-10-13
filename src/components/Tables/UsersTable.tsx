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
import { MoreVert } from '@mui/icons-material';
import { IconButton } from '../IconButton';
import { useNavigate } from 'react-router-dom';
import { SitesDashboardFilters } from '../../types';
import { Spinner } from '../Spinner';
import { formatDateForDisplay } from '../../utils/formatters';
import { useGetUsers } from '../../api/accountUI/users';

type Props = {
	filters: SitesDashboardFilters;
};

export const UsersTable = ({ filters }: Props) => {
	const navigate = useNavigate();
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [page, setPage] = React.useState(0);
	const [internalFilters, setInternalFilters] = useState(filters);

	const { data, isLoading, isError } = useGetUsers({
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
									{row.name}
								</TableCell>
								<TableCell align="right">{row.company}</TableCell>
								<TableCell align="right">{row.employee_id}</TableCell>
								<TableCell align="right">{row.email_address}</TableCell>
								<TableCell align="right">{row.department}</TableCell>
								<TableCell align="right">{formatDateForDisplay(row.time)}</TableCell>
								<TableCell align="right">
									<IconButton
										round
										Icon={MoreVert}
										onClick={() => navigate(`/company/${row.id}`)}
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
