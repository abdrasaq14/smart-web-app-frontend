import { z } from 'zod';

const stringOrNumberSchema = z.union([z.string(), z.number()]);
export const ChartDatasetDataSchema = z.array(z.array(stringOrNumberSchema));