import { z } from 'zod';

const AssetSchema = z.object({
	assetName: z.string(),
	site: z.string(),
	assetType: z.string(),
	assetCoordinate: z.string(),
	assetCapacity: z.string(),
	time: z.string(),
});
export const AssetsResponseSchema = z.array(AssetSchema);

export type ApiAsset = z.infer<typeof AssetSchema>;
export type ApiAssets = z.infer<typeof AssetsResponseSchema>;
