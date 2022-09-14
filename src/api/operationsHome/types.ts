import { z } from 'zod';

const AlertHistoryRowSchema = z.object({
	id: z.string(),
	site: z.string(),
	zone: z.string(),
	district: z.string(),
	activity: z.string(),
	status: z.string(),
	time: z.string(),
});
export const AlertHistoryResponseSchema = z.array(AlertHistoryRowSchema);

const SitesMonitoredSchema = z.object({
	total: z.number(),
	data: z.array(
		z.object({
			key: z.string(),
			value: z.number(),
		})
	),
});
export type ApiSitesMonitored = z.infer<typeof SitesMonitoredSchema>;

const xAxisSchema = z.array(z.number());
const yAxisSchemaRow = z.array(z.number());
const LoadProfileChartSchema = z.object({
	xAxis: xAxisSchema,
	yAxis: z.array(yAxisSchemaRow),
});
export type ApiLoadProfileChart = z.infer<typeof LoadProfileChartSchema>;

const PowerConsumptionSchema = z.object({
	data: z.array(z.array(z.union([z.string(), z.number()]))),
});
export type ApiPowerConsumptionChart = z.infer<typeof PowerConsumptionSchema>;

export const OperationsHomeSchema = z.object({
	tableData: AlertHistoryResponseSchema,
	chartsData: z.object({
		sitesMonitored: SitesMonitoredSchema,
		loadProfile: LoadProfileChartSchema,
		powerConsumption: PowerConsumptionSchema,
	}),
	cardsData: z.object({
		totalConsumption: z.number(),
		currentLoad: z.number(),
		avgAvailability: z.number(),
		powerCuts: z.number(),
		overloadedDTs: z.number(),
		sitesUnderMaintenance: z.number(),
	}),
});

export type ApiAlertHistoryRow = z.infer<typeof AlertHistoryRowSchema>;
export type ApiAlertHistory = z.infer<typeof AlertHistoryResponseSchema>;
export type ApiOperationsHome = z.infer<typeof OperationsHomeSchema>;
