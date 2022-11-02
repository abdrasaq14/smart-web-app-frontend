import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button } from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import { post } from '../../api/apiUtils';
import { ApiCreateDevice } from '../../api/accountUI/devices/types';
import { useGetSites } from '../../api/operations/operationsSites';
import { useParams } from 'react-router-dom';
import { useGetDeviceTariffs } from '../../api/accountUI/device_tariffs';
import { SitesDashboardFilters } from '../../types';
import { DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE } from '../../utils/constants';
import { ControlTextField } from './FormComponents/ControlTextField';
import { ControlSelectField } from './FormComponents/ControlSelectField';

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

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<ApiCreateDevice>();
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
						<ControlTextField
							name="id"
							label="Device id"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<ControlTextField
							name="name"
							label="Device name"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<ControlTextField
							name="location"
							label="Device location"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<ControlTextField
							name="co_ordinate"
							label="Device co-ordinate"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<ControlTextField
							name="company_district"
							label="Company district"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<ControlTextField
							name="asset_capacity"
							label="Asset capacity"
							type="number"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<ControlTextField
							name="asset_type"
							label="Asset type"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<ControlSelectField
							name="site"
							label="Site"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
							options={
								sites?.results.map((site) => ({
									key: site.id,
									value: site.id,
									label: site.name,
								})) ?? []
							}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<ControlSelectField
							name="tariff"
							label="Device tariff"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
							options={
								deviceTariffs?.map((deviceTariff) => ({
									key: deviceTariff.id,
									value: deviceTariff.id,
									label: deviceTariff.name,
								})) ?? []
							}
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
