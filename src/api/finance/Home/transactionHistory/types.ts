import { z } from 'zod';

const CreateTransactionSchema = z.object({
	site: z.number(),
	subscription: z.string(),
	amount_billed: z.number(),
	amount_bought: z.number(),
	days: z.number(),
	time: z.string(),
});

const TransactionHistoryRowSchema = z.object({
	id: z.number(),
	site_name: z.string(),
	site: z.number(),
	subscription: z.string(),
	amount_billed: z.number(),
	amount_bought: z.number(),
	days: z.number(),
	time: z.string(),
});

export const TransactionHistoryResponseSchema = z.object({
	count: z.number(),
	next: z.nullable(z.string()),
	previous: z.nullable(z.string()),
	results: z.array(TransactionHistoryRowSchema),
});

export type ApiCreateTransaction = z.infer<typeof CreateTransactionSchema>;
export type ApiGetTransaction = z.infer<typeof TransactionHistoryRowSchema>;
export type ApiTransactionHistory = z.infer<typeof TransactionHistoryResponseSchema>;
