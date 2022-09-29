export type DashboardFiltersProps = {
	sites: number[];
};

export type DashboardPaginationProps = {
	page: number;
	page_size: number;
};

export type DashboardQueryProps = {
	pagination?: DashboardPaginationProps;
	filters?: DashboardFiltersProps;
};
