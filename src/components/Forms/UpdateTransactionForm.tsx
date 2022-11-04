import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button } from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import { patch } from '../../api/apiUtils';
import { useGetSites } from '../../api/operations/operationsSites';
import { SitesDashboardFilters } from '../../types';
import { ControlTextField } from './FormComponents/ControlTextField';
import { DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE } from '../../utils/constants';
import { ControlSelectField } from './FormComponents/ControlSelectField';
import { useSnackbar } from 'notistack';
import { ApiGetTransaction } from '../../api/finance/Home/transactionHistory/types';
import { ControlDatePickerField } from './FormComponents/ControlDatePicker';

export default function UpdateTransactionForm({
	entity: currentTransaction,
	afterSubmit,
	filters,
}: {
	entity: ApiGetTransaction;
	afterSubmit: () => void;
	filters: SitesDashboardFilters;
}) {
	const queryClient = useQueryClient();
	const { enqueueSnackbar } = useSnackbar();

	const { data: sites } = useGetSites({ filters });

	const currentTransactionForUpdate = {
		...currentTransaction,
	};

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<ApiGetTransaction>({
		defaultValues: currentTransactionForUpdate,
	});

	const mutation = useMutation(
		(newTransaction: ApiGetTransaction): Promise<any> => {
			return patch('transaction-history', { ...newTransaction });
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('transaction-history');
				enqueueSnackbar('Transaction has been updated!', { variant: 'success' });
				afterSubmit();
			},
			onError: () => {
				enqueueSnackbar('Error while trying to update transaction!', { variant: 'error' });
			},
		}
	);

	const onSubmit: SubmitHandler<ApiGetTransaction> = (data) => {
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
