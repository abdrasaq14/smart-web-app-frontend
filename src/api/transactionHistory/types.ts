import { z } from 'zod';

const TransactionHistoryRowSchema = z.object({
	site: z.string(),
	subscription: z.string(),
	amountBilled: z.string(),
	amountBought: z.string(),
	duration: z.string(),
	time: z.string(),
});
export const TransactionHistoryResponseSchema = z.array(TransactionHistoryRowSchema);

export type ApiAlertTransactionRow = z.infer<typeof TransactionHistoryRowSchema>;
export type ApiTransactionHistory = z.infer<typeof TransactionHistoryResponseSchema>;
