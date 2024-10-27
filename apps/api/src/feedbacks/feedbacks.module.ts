import { Module } from "@nestjs/common";
import { FeedbacksService } from "./feedbacks.service";
import { FeedbacksController } from "./feedbacks.controller";
import { DatabaseModule } from "src/database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [FeedbacksController],
  providers: [FeedbacksService],
})
export class FeedbacksModule {}
