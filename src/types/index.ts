export type DashboardFiltersProps = {
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
	filters?: DashboardFiltersProps;
};
