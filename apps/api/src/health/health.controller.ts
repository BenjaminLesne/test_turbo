import { Controller, Get } from '@nestjs/common';
import { type HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  findAll() {
    const stuff = '';
    return this.healthService.findAll();
  }
}
