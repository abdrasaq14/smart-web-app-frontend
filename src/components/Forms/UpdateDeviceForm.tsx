import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button } from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import { patchWithId } from '../../api/apiUtils';
import { ApiCreateDevice, GetApiDevice } from '../../api/accountUI/devices/types';
import { useGetSites } from '../../api/operations/operationsSites';
import { useGetDeviceTariffs } from '../../api/accountUI/device_tariffs';
import { SitesDashboardFilters } from '../../types';
import { ControlTextField } from './FormComponents/ControlTextField';
import { DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE } from '../../utils/constants';
import { ControlSelectField } from './FormComponents/ControlSelectField';
import { useSnackbar } from 'notistack';

export default function UpdateDeviceForm({
	entity: currentDevice,
	afterSubmit,
	filters,
}: {
	entity: GetApiDevice;
	afterSubmit: () => void;
	filters: SitesDashboardFilters;
}) {
	const queryClient = useQueryClient();
	const { enqueueSnackbar } = useSnackbar();

	const { data: sites } = useGetSites({ filters });
	const { data: deviceTariffs } = useGetDeviceTariffs({ filters });

	const currentDeviceForUpdate = {
		...currentDevice,
		company: currentDevice.company.id,
		tariff: currentDevice.tariff.id,
	};

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<ApiCreateDevice>({
		defaultValues: currentDeviceForUpdate,
	});

	const mutation = useMutation(
		(newDevice: ApiCreateDevice): Promise<any> => {
			return patchWithId('devices', currentDeviceForUpdate.id, { ...newDevice });
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('devices');
				enqueueSnackbar('Device has been updated!', { variant: 'success' });
				afterSubmit();
			},
			onError: () => {
				enqueueSnackbar('Error while trying to update device!', { variant: 'error' });
			},
		}
	);

	const onSubmit: SubmitHandler<ApiCreateDevice> = (data) => {
		console.log(data);
		mutation.mutate({ ...data });
	};

	return (
		<Box
			sx={{
				width: '300px',
				padding: '16px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
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
