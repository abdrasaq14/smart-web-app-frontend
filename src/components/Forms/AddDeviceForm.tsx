import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import { post } from '../../api/apiUtils';
import { ApiCreateDevice } from '../../api/accountUI/devices/types';
import { useGetSites } from '../../api/operations/operationsSites';
import { useParams } from 'react-router-dom';
import { useGetDeviceTariffs } from '../../api/accountUI/device_tariffs';
import { SitesDashboardFilters } from '../../types';

export default function AddDeviceForm({ filters }: { filters: SitesDashboardFilters }) {
	const { id: companyId } = useParams();
	const queryClient = useQueryClient();
	const mutation = useMutation(
		(newDevice: ApiCreateDevice): Promise<any> => {
			return post('devices', newDevice);
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('devices');
			},
		}
	);
	const { data: sites } = useGetSites({ filters });
	const { data: deviceTariffs } = useGetDeviceTariffs({ filters });

	const { control, handleSubmit } = useForm<ApiCreateDevice>();
	const onSubmit: SubmitHandler<ApiCreateDevice> = (data) => {
		console.log(data);
		mutation.mutate({ ...data, company: parseInt(companyId ?? '0') });
	};

	return (
		<Box>
			<Box>Add device</Box>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<Controller
							render={({ field }) => <TextField {...field} label="Device id" />}
							name="id"
							control={control}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<Controller
							render={({ field }) => <TextField {...field} label="Device name" />}
							name="name"
							control={control}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<Controller
							render={({ field }) => <TextField {...field} label="Device location" />}
							name="location"
							control={control}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<Controller
							render={({ field }) => <TextField {...field} label="Device co-ordinate" />}
							name="co_ordinate"
							control={control}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<Controller
							render={({ field }) => <TextField {...field} label="Company district" />}
							name="company_district"
							control={control}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<Controller
							render={({ field }) => <TextField {...field} type="number" label="Asset capacity" />}
							name="asset_capacity"
							control={control}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<Controller
							render={({ field }) => <TextField {...field} type="number" label="Asset type" />}
							name="asset_type"
							control={control}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<Controller
							render={({ field }) => (
								<FormControl>
									<InputLabel>Company Type</InputLabel>
									<Select {...field} label="Site">
										{sites?.results.map((site) => (
											<MenuItem key={site.id} value={site.id}>
												{site.name}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							)}
							name="site"
							control={control}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<Controller
							render={({ field }) => (
								<FormControl>
									<InputLabel>Device tariff</InputLabel>
									<Select {...field} label="Device tariff">
										{deviceTariffs?.map((deviceTariff) => (
											<MenuItem key={deviceTariff.id} value={deviceTariff.id}>
												{deviceTariff.name}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							)}
							name="tariff"
							control={control}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<Button variant="contained" onClick={handleSubmit(onSubmit)}>
							Submit
						</Button>
					</Box>
				</Box>
			</form>
		</Box>
	);
}
