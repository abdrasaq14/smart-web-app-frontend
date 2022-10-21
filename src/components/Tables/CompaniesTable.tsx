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
import { getUserName } from '../../api/accountUI/users';
import { formatDateForDisplay } from '../../utils/formatters';
import { Link } from 'react-router-dom';

type Props = {
	filters: SitesDashboardFilters;
};

export const CompaniesTable = ({ filters }: Props) => {
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [page, setPage] = React.useState(0);
	const [internalFilters, setInternalFilters] = useState(filters);

	const { data, isLoading, isError } = useGetCompanies({
		pagination: { page, page_size: rowsPerPage },
		filters: internalFilters,
	});
	const dataToDisplay = data?.results ?? [];

	console.log('dataToDisplay: ', dataToDisplay);

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
							<TableCell>Companies</TableCell>
							<TableCell align="right">Date</TableCell>
							<TableCell align="right">Users</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{dataToDisplay.map((company) => (
							<TableRow key={company.id}>
								{company.users.length > 0 ? (
									company.users.map((user) => (
										<>
											<TableCell align="right">
												<Link to={company.id.toString()}>{company.name}</Link>
											</TableCell>
											<TableCell align="right">{formatDateForDisplay(user.time)}</TableCell>
											<TableCell align="right">{getUserName(user)}</TableCell>
										</>
									))
								) : (
									<TableCell align="right" colSpan={3}>
										<Link to={company.id.toString()}>{company.name}</Link>
									</TableCell>
								)}
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
