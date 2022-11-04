import { SitesDashboardFilters } from '../types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField } from '@mui/material';
import { IconButton } from '../components/IconButton';
import { Logout, NotificationsOutlined, PersonOutlined } from '@mui/icons-material';

const styles = {
	header: { display: 'flex', justifyContent: 'space-between', width: '100%', height: '56px' },
	filters: { display: 'flex', width: '100%', justifyContent: 'end', margin: '20px' },
	headerIcons: { display: 'flex', alignItems: 'center' },
};

type Props = {
	filters: SitesDashboardFilters;
	setFilters: React.Dispatch<React.SetStateAction<SitesDashboardFilters>>;
	searchPlaceholder?: string;
};
export const SearchHeader = ({
	filters,
	setFilters,
	searchPlaceholder = 'search anything...',
}: Props) => {
	const navigate = useNavigate();

	const handleChangeInSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setFilters((prevFilters) => ({ ...prevFilters, search: value }));
	};

	return (
		<Box>
			<Box sx={styles.header}>
				<TextField
					sx={{ width: '500px' }}
					id="site_search"
					type="text"
					placeholder={searchPlaceholder}
					value={filters.search}
					onChange={handleChangeInSearch}
				/>
				<Box sx={styles.headerIcons}>
					<IconButton light Icon={NotificationsOutlined} onClick={() => {}} />
					<IconButton round Icon={PersonOutlined} onClick={() => navigate('/account')} />
					<IconButton round Icon={Logout} onClick={() => navigate('/login')} />
				</Box>
			</Box>
		</Box>
	);
};
