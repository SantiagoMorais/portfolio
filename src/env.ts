import { z } from "zod";

const envSchema = z.object({
  VITE_HYGRAPH_API_URL: z.string().url(),
  VITE_HYGRAPH_API_TOKEN: z.string(),
  VITE_PHONE_NUMBER: z.string(),
  VITE_EMAIL: z.string(),
  VITE_LINKEDIN_URL: z.string(),
  VITE_GITHUB_PROFILE: z.string(),
  VITE_PROJECT_REPOSITORY: z.string(),
  VITE_GITHUB_REPOSITORIES: z.string(),
});

export const env = envSchema.parse(import.meta.env);
