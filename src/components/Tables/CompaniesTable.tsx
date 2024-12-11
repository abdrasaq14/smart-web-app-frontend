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
import { useGetCompanies } from '../../api/accountUI/companies';
import { Link } from 'react-router-dom';
import { is } from 'date-fns/locale';

type Props = {
	filters: SitesDashboardFilters;
};

export const CompaniesTable = ({ filters }: Props) => {
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [page, setPage] = React.useState(0);
	const [internalFilters, setInternalFilters] = useState(filters);

	const { data, isLoading, isError } = useGetCompanies({
		pagination: { page, page_size: rowsPerPage },
		filters: internalFilters,
	});
	const test = useGetCompanies({
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
		console.log("Error fetching data...", test);
		return <Box>Error fetching data...</Box>;
	}

	return (
		<Box>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center">Companies</TableCell>
							<TableCell align="center">Date</TableCell>
							<TableCell align="center">Users</TableCell>
							<TableCell align="center">Phone number</TableCell>
							<TableCell align="center">Email address</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{dataToDisplay.map((company) => (
							<TableRow key={company.id}>
								<TableCell align="center">
									<Link to={company.id.toString()}>{company.name}</Link>
								</TableCell>
								<TableCell align="center">{company.renewal_date}</TableCell>
								<TableCell align="center">{company.users.length}</TableCell>
								<TableCell align="center">{company.phone_number}</TableCell>
								<TableCell align="center">{company.email}</TableCell>
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
