import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
void bootstrap();

// TODO:
// api/pnpm dev fail, I don't know why, first commit to fail below

// b0f4b51

// apps/api/.eslintrc.cjs | 4 ++--

// apps/api/package.json | 2 ++

// apps/api/src/health/health.controller.ts | 4 ++--

// apps/api/tsconfig.json | 1 +

// apps/web/.eslintrc.cjs | 4 ++--

// packages/eslint-config/base.cjs | 16 ++++++++++++----

// packages/eslint-config/package.json | 4 ++++

// pnpm-lock.yaml
