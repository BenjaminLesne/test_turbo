import { z } from "zod";

const EnvSchema = z.object({
  DATABASE_URL: z.string().url(),
});

export type Env = z.infer<typeof EnvSchema>;

export const envConfig = () => EnvSchema.parse(process.env);
