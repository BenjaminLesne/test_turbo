import { z } from "zod";

export const createFeedbackSchema = z
  .object({
    message: z.string().min(10),
  })
  .required();

export type CreateFeedbackDto = z.infer<typeof createFeedbackSchema>;
