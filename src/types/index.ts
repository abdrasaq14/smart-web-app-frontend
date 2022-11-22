export type SitesDashboardFilters = {
	search?: string | null;
	sites?: number[];
	companies?: number[] | string[];
	start_date?: Date | null;
	end_date?: Date | null;
	status?: string | null;
};

export type DashboardPaginationProps = {
	page: number;
	page_size: number;
};

export type DashboardQueryProps = {
	pagination?: DashboardPaginationProps;
	filters?: SitesDashboardFilters;
	card_type?: string;
};
export type OperationsSiteDashboardChartType = 'voltage' | 'load' | 'pf'; // | 'frequency';

export interface AppMenuButton {
	id: number;
	label: string;
	icon?: JSX.Element;
	path: string;
}

export type KeyValueMapping = { [key in string]: (value: number, total?: number) => string };
