import { z } from "zod";

export const envConfig = () => ({
  DATABASE_URL: z.string().url().parse(process.env.DATABASE_URL),
});
