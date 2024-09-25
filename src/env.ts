import { z } from "zod";

const envSchema = z.object({
  VITE_HYGRAPH_API_URL: z.string().url(),
  VITE_HYGRAPH_API_TOKEN: z.string(),
});

export const env = envSchema.parse(import.meta.env);
