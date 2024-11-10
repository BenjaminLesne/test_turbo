import { Inject, Injectable } from "@nestjs/common";
import { CreateFeedbackDto } from "./dto/create-feedback.dto";
import { DATABASE_CONNECTION } from "src/database/connections";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as feedbacksSchemas from "./entities/schema";

@Injectable()
export class FeedbacksService {
  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly database: NodePgDatabase<typeof feedbacksSchemas>,
  ) {}

  create(createFeedbackDto: CreateFeedbackDto) {
    const feedbacksTable = feedbacksSchemas.feedbacks;
    const newFeedback = this.database
      .insert(feedbacksTable)
      .values(createFeedbackDto);

    return newFeedback;
  }

  findAll() {
    return `This action returns all feedbacks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} feedback`;
  }

  // update(id: number, updateFeedbackDto: UpdateFeedbackDto) {
  //   return `This action updates a #${id} feedback`;
  // }

  remove(id: number) {
    return `This action removes a #${id} feedback`;
  }
}
