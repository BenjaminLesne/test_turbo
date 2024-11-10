import {
  type PipeTransform,
  type ArgumentMetadata,
  BadRequestException,
} from "@nestjs/common";
import { ZodError, type ZodSchema } from "zod";

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      const parsedValue = this.schema.parse(value) as unknown;
      return parsedValue;
    } catch (error) {
      if (error instanceof ZodError) {
        throw new BadRequestException({
          message: "Validation failed",
          errors: error.errors,
        });
      }
      throw new BadRequestException("Validation failed");
    }
  }
}
