import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
} from "@nestjs/common";
import { FeedbacksService } from "./feedbacks.service";
import {
  CreateFeedbackDto,
  createFeedbackSchema,
} from "./dto/create-feedback.dto";
import { ZodValidationPipe } from "src/common/pipes/validation.pipe";

@Controller("feedbacks")
export class FeedbacksController {
  constructor(private readonly feedbacksService: FeedbacksService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createFeedbackSchema))
  create(@Body() createFeedbackDto: CreateFeedbackDto) {
    return this.feedbacksService.create(createFeedbackDto);
  }

  @Get()
  findAll() {
    return this.feedbacksService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.feedbacksService.findOne(+id);
  }

  // @Patch(":id")
  // update(
  //   @Param("id") id: string,
  //   @Body() updateFeedbackDto: UpdateFeedbackDto,
  // ) {
  //   return this.feedbacksService.update(+id, updateFeedbackDto);
  // }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.feedbacksService.remove(+id);
  }
}
