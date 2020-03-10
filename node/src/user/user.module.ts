import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserTestDataService } from "./user-test-data.service";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UserTestDataService],
  controllers: [UserController]
})
export class UserModule {}
