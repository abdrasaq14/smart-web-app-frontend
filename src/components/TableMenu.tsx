import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MoreVert } from '@mui/icons-material';
import { IconButton } from './IconButton';

type MenuAction = {
	label: string;
	action: () => void;
};

export type AnchorEl = null | HTMLElement;

type Props = {
	menuActions: MenuAction[];
};

export default function TableMenu({ menuActions }: Props) {
	const [anchorEl, setAnchorEl] = React.useState<AnchorEl>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton round Icon={MoreVert} onClick={handleClick} />
			{/*<Button*/}
			{/*	id="demo-positioned-button"*/}
			{/*	aria-controls={open ? 'demo-positioned-menu' : undefined}*/}
			{/*	aria-haspopup="true"*/}
			{/*	aria-expanded={open ? 'true' : undefined}*/}
			{/*	onClick={handleClick}*/}
			{/*>*/}
			{/*	Dashboard*/}
			{/*</Button>*/}
			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
			>
				{menuActions.map((menuAction) => (
					<MenuItem
						key={menuAction.label}
						onClick={() => {
							menuAction.action();
							handleClose();
						}}
					>
						{menuAction.label}
					</MenuItem>
				))}
			</Menu>
		</div>
	);
}
