import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user";
import { Repository } from "typeorm";
import { Builder } from "builder-pattern";

/**
 * Insert some test users
 */
@Injectable()
export class UserTestDataService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {
    this.insertTestUsers().catch(e => console.error(e));
  }

  private async insertTestUsers() {
    await this.userRepository.insert(
      Builder<User>()
        .firstName("Max")
        .lastName("Power")
        .email("max@pow.er")
        .birthday(new Date(1980, 12, 12))
        .build()
    );

    await this.userRepository.insert(
      Builder<User>()
        .firstName("James")
        .lastName("Bond")
        .email("james@bo.nd")
        .birthday(new Date(1985, 12, 12))
        .build()
    );
  }
}
