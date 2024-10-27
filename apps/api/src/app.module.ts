import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HealthModule } from "./health/health.module";
import { ConfigModule } from "@nestjs/config";
import { envConfig } from "./config/configuration";
import { DatabaseModule } from "./database/database.module";
import { FeedbacksModule } from "./feedbacks/feedbacks.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envConfig],
    }),
    HealthModule,
    DatabaseModule,
    FeedbacksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
