import { ValidationPipe } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { config } from "dotenv"

import { AppModule } from "./app.module"

config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe())
  app.setGlobalPrefix("/api/v1")

  const config = new DocumentBuilder().setTitle("Joblist API").setDescription("The joblist API description").setVersion("1.0").build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("/api", app, document)

  await app.listen(3001)
}
bootstrap()
