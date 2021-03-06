import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { useContainer } from "class-validator";
import { AppModule } from "./app.module";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(".database.sqlite3");

db.serialize(async () => {
  db.run("DROP TABLE IF EXISTS users");
  db.run(`CREATE TABLE users (
                    id INT PRIMARY KEY, 
                    firstName TEXT, 
                    lastName TEXT, 
                    email TEXT, 
                    birthday TEXT)
                `);

  db.run("DROP TABLE IF EXISTS vehicles");
  db.run(`CREATE TABLE vehicles (
                    id INT PRIMARY KEY, 
                    licensePlate TEXT,
                    vin TEXT,
                    model TEXT,
                    active INTEGER, 
                    color TEXT, 
                    validTill TEXT)
                `);
});

db.close(async () => {
  const app = (await NestFactory.create(AppModule)).setGlobalPrefix("api/v1");

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidUnknownValues: true,
      validationError: { target: false }
    })
  );

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const options = new DocumentBuilder()
    .setTitle("Users and Vehicles")
    .setDescription("API for managing users and vehicles")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("swagger-ui.html", app, document);

  await app.listen(8080);
});
