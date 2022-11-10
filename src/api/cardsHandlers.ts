import { useGetOperationsHomeCardsData } from './operations/operationsHome/cardsData';
import { useGetOperationsDashboardCardsData } from './operations/operationsDashboard/cardsData';
import { useGetFinanceHomeCardsData } from './finance/Home/cardsData';
import { useGetManagerHomeCardsData } from './seniorManager/Home/cardsData';

export const CARD_HANDLER = {
	OPERATIONS: useGetOperationsHomeCardsData,
	OPERATIONS_DASHBOARD: useGetOperationsDashboardCardsData,
	FINANCE: useGetFinanceHomeCardsData,
	MANAGER: useGetManagerHomeCardsData,
} as const;
