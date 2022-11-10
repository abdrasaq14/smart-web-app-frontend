import { useGetOperationsHomeCardsData } from './operations/operationsHome/cardsData';

export const CARD_HANDLER = {
	OPERATIONS: useGetOperationsHomeCardsData,
} as const;
