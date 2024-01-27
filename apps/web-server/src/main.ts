import { ValidationPipe } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { config } from "dotenv"

import { AppModule } from "./app.module"

config()

const swaggerCDN = {
  customSiteTitle: "Backend Generator",
  customfavIcon: "https://avatars.githubusercontent.com/u/6936373?s=200&v=4",
  customJs: [
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js",
  ],
  customCssUrl: [
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css",
  ],
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe())
  app.setGlobalPrefix("/api/v1")

  const config = new DocumentBuilder().setTitle("Joblist API").setDescription("The joblist API description").setVersion("1.0").build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("/api", app, document, swaggerCDN)

  await app.listen(3001)
}
bootstrap()
