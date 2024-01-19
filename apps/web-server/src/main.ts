import { ValidationPipe } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { config } from "dotenv"

import { AppModule } from "./app.module"

config()

const whitelist = [
  'http://localhost:3000',
  'http://localhost:8000',
  'http://127.0.0.1:3000',
  'https://joblist-web-admin.vercel.app'
];

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors({
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
    origin: function (origin, callback) {
      if (!origin) {
        callback(null, true);
        return;
      }
      if (
        whitelist.includes(origin) || // Checks your whitelist
        !!origin.match(/joblist-web-admin\.vercel\.app$/) // Overall check for your domain
      ) {
        console.log('allowed cors for:', origin);
        callback(null, true);
      } else {
        console.log('blocked cors for:', origin);
        callback(new ImATeapotException('Not allowed by CORS'), false);
      }
    },
  },)

  app.useGlobalPipes(new ValidationPipe())
  app.setGlobalPrefix("/api/v1")

  const config = new DocumentBuilder().setTitle("Joblist API").setDescription("The joblist API description").setVersion("1.0").build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("/api", app, document)

  await app.listen(3001)
}
bootstrap()
