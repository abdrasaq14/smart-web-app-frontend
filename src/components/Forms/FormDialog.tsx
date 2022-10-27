import React, { FunctionComponent } from 'react';
import { Dialog, DialogTitle } from '@mui/material';

export interface FormDialogProps {
	open: boolean;
	setOpen: (openedState: boolean) => void;
	title: string;
	children?: React.ReactNode;
}

const FormDialog: FunctionComponent<FormDialogProps> = ({ setOpen, open, title, children }) => {
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>{title}</DialogTitle>
			{children}
		</Dialog>
	);
};

export default FormDialog;
