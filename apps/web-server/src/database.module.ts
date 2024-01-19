import { TypeOrmModule } from "@nestjs/typeorm"

export const DatabaseModule = TypeOrmModule.forRoot({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [],
  synchronize: true,
  autoLoadEntities: true,
  ssl: true,
})
