import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
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

	const { register, handleSubmit } = useForm<ApiCreateDevice>();
	const onSubmit: SubmitHandler<ApiCreateDevice> = (data) => {
		console.log(data);
		mutation.mutate({ ...data, company: parseInt(companyId ?? '0') });
	};

	return (
		<Box>
			<Box>Add device</Box>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column' }}>
						<label>Device id</label>
						<input {...register('id')} />
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column' }}>
						<label>Device name</label>
						<input {...register('name')} />
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column' }}>
						<label>Device location</label>
						<input {...register('location')} />
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column' }}>
						<label>Device co-ordinate</label>
						<input {...register('co_ordinate')} />
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column' }}>
						<label>Company district</label>
						<input {...register('company_district')} />
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column' }}>
						<label>Asset capacity</label>
						<input type="number" {...register('asset_capacity')} />
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column' }}>
						<label>Asset type</label>
						<input {...register('asset_type')} />
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column' }}>
						<label>Site</label>
						<select {...register('site')}>
							{sites?.results.map((site) => (
								<option key={site.id} value={site.id}>
									{site.name}
								</option>
							))}
						</select>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column' }}>
						<label>Device tariff</label>
						<select {...register('tariff')}>
							{deviceTariffs?.map((deviceTariff) => (
								<option key={deviceTariff.id} value={deviceTariff.id}>
									{deviceTariff.name}
								</option>
							))}
						</select>
					</Box>

					<input type="submit" />
				</Box>
			</form>
		</Box>
	);
}
