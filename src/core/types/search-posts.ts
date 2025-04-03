import { z } from "zod";

export const searchPostForm = z.object({
  postTitle: z.string().max(100, "Não exceder 100 caracteres"),
});

export type TSearchPost = z.infer<typeof searchPostForm>;