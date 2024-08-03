import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('app')  // Adiciona uma tag para o grupo de endpoints na interface do Swagger
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get Hello World' })  // Descrição do endpoint
  @ApiResponse({ status: 200, description: 'Hello World message returned successfully.' })  // Resposta esperada
  getHello(): string {
    return this.appService.getHello();
  }
}
