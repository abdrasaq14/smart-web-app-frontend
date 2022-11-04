import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button } from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import { post } from '../../api/apiUtils';
import { useGetSites } from '../../api/operations/operationsSites';
import { SitesDashboardFilters } from '../../types';
import { DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE } from '../../utils/constants';
import { ControlTextField } from './FormComponents/ControlTextField';
import { ControlSelectField } from './FormComponents/ControlSelectField';
import { useSnackbar } from 'notistack';
import { ApiCreateTransaction } from '../../api/finance/Home/transactionHistory/types';
import { ControlDatePickerField } from './FormComponents/ControlDatePicker';

export default function AddTransactionForm({
	filters,
	afterSubmit,
}: {
	filters: SitesDashboardFilters;
	afterSubmit: () => void;
}) {
	const { enqueueSnackbar } = useSnackbar();
	const queryClient = useQueryClient();
	const { data: sites } = useGetSites({ filters });

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<ApiCreateTransaction>();

	const mutation = useMutation(
		(newTransaction: ApiCreateTransaction): Promise<any> => {
			return post('transaction-history', newTransaction);
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('transaction-history');
				enqueueSnackbar('Transaction has been added!', { variant: 'success' });
				afterSubmit();
			},
			onError: () => {
				enqueueSnackbar('Error while trying to add transaction!', { variant: 'error' });
			},
		}
	);

	const onSubmit: SubmitHandler<ApiCreateTransaction> = (data) => {
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
						<ControlSelectField
							name="subscription"
							label="Transaction name"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
							options={['Collection report', 'Reconciliation Report'].map((name) => ({
								key: name,
								value: name,
								label: name,
							}))}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<ControlTextField
							name="amount_billed"
							label="Amount billed"
							type="number"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<ControlTextField
							name="amount_bought"
							label="Amount collected"
							type="number"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<ControlTextField
							name="days"
							label="Energy billed"
							type="number"
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
						<ControlDatePickerField
							name="time"
							label="Date"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
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
