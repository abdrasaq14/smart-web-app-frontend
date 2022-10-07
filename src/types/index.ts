export type SitesDashboardFilters = {
	search?: string | null;
	sites?: number[];
	start_date?: Date | null;
	end_date?: Date | null;
};

export type DashboardPaginationProps = {
	page: number;
	page_size: number;
};

export type DashboardQueryProps = {
	pagination?: DashboardPaginationProps;
	filters?: SitesDashboardFilters;
};
export type OperationsSiteDashboardChartType = 'voltage' | 'load' | 'pf' | 'frequency';

export interface AppMenuButton {
	id: number;
	label: string;
	icon?: JSX.Element;
	path: string;
}
