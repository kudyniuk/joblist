import { TypeOrmModule } from "@nestjs/typeorm"

export const DatabaseModule = TypeOrmModule.forRoot({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "user",
  password: "password",
  database: "adventure_development",
  entities: [],
  synchronize: true,
  autoLoadEntities: true,
})
