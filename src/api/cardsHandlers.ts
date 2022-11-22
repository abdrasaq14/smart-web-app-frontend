import { useGetOperationsHomeCardsData } from './operations/operationsHome/cardsData';
import { useGetOperationsDashboardCardsData } from './operations/operationsDashboard/cardsData';
import { useGetFinanceHomeCardsData } from './finance/Home/cardsData';
import { useGetManagerHomeCardsData } from './seniorManager/Home/cardsData';
import { useGetAlertHistory } from './operations/operationsHome/alertHistory';

export const CARD_HANDLER = {
	OPERATIONS: useGetOperationsHomeCardsData,
	OPERATIONS_DASHBOARD: useGetOperationsDashboardCardsData,
	FINANCE: useGetFinanceHomeCardsData,
	MANAGER: useGetManagerHomeCardsData,
	PENDING_ALERTS: useGetAlertHistory,
} as const;
