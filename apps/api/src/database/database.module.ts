import { Module } from "@nestjs/common";
import { DATABASE_CONNECTION } from "./connections";
import { ConfigService } from "@nestjs/config";
import { Pool } from "pg";
import type { Env } from "src/config/configuration";
import { drizzle } from "drizzle-orm/node-postgres";

@Module({
  providers: [
    {
      provide: DATABASE_CONNECTION,
      useFactory: (configService: ConfigService<Env>) => {
        const pool = new Pool({
          connectionString: configService.get("DATABASE_URL", { infer: true }),
        });

        return drizzle(pool, {
          schema: {},
        });
      },
      inject: [ConfigService],
    },
  ],
})
export class DatabaseModule {}
