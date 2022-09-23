import { z } from 'zod';

const AssetSchema = z.object({
	asset_name: z.string(),
	name: z.string(),
	asset_type: z.string(),
	asset_co_ordinate: z.string(),
	asset_capacity: z.string(),
	time: z.string(),
});
export const AssetsResponseSchema = z.object({
	count: z.number(),
	next: z.nullable(z.string()),
	previous: z.nullable(z.string()),
	results: z.array(AssetSchema),
});

export type ApiAsset = z.infer<typeof AssetSchema>;
export type ApiAssets = z.infer<typeof AssetsResponseSchema>;
