import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Beauty Saloon API')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('customers')
    .addTag('appointments')
    .addTag('saloons')
    .addTag('addresses')
    .addTag('attendants')
    .addTag('cities')
    .addTag('states')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
