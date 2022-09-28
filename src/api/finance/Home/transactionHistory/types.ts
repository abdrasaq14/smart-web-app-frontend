import { z } from 'zod';

const TransactionHistoryRowSchema = z.object({
	id: z.number(),
	site: z.string(),
	subscription: z.string(),
	amountBilled: z.string(),
	amountBought: z.string(),
	duration: z.string(),
	time: z.string(),
});
export const TransactionHistoryResponseSchema = z.object({
	count: z.number(),
	next: z.nullable(z.string()),
	previous: z.nullable(z.string()),
	results: z.array(TransactionHistoryRowSchema),
});

export type ApiAlertTransactionRow = z.infer<typeof TransactionHistoryRowSchema>;
export type ApiTransactionHistory = z.infer<typeof TransactionHistoryResponseSchema>;
