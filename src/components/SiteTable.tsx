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
import { ApiAssets } from '../api/operations/operationsSites/types';
import { Dashboard } from '@mui/icons-material';
import { IconButton } from '../components/IconButton';
import { useNavigate } from 'react-router-dom';

type Props = {
	data: ApiAssets;
};

export const SiteTable = ({ data }: Props) => {
	const navigate = useNavigate();
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [page, setPage] = React.useState(0);
	const dataToDisplay = data.results.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};
	return (
		<Box>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Asset name</TableCell>
							<TableCell align="right">Site</TableCell>
							<TableCell align="right">Asset Type</TableCell>
							<TableCell align="right">Asset co-ordinate</TableCell>
							<TableCell align="right">Asset capacity</TableCell>
							<TableCell align="right">Time/Date</TableCell>
							<TableCell align="right"></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{dataToDisplay.map((row) => (
							<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell align="right" component="th" scope="row">
									{row.asset_name}
								</TableCell>
								<TableCell align="right">{row.name}</TableCell>
								<TableCell align="right">{row.asset_type}</TableCell>
								<TableCell align="right">{row.asset_co_ordinate}</TableCell>
								<TableCell align="right">{row.asset_capacity}</TableCell>
								<TableCell align="right">{row.time}</TableCell>
								<TableCell align="right">
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
				rowsPerPageOptions={[5, 10, 25]}
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
