import { Injectable } from "@nestjs/common";
import { User } from "./user";
import { InjectRepository } from "@nestjs/typeorm";
import { Like, Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  public getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  public get(id: string): Promise<User | void> {
    return this.userRepository.findOne(id);
  }

  public getByLastname(lastname: string): Promise<User[]> {
    // const normalizedLastname = lastname.toLowerCase();
    const user = this.userRepository.find({ lastName: Like(`%${lastname}%`) });
    return user;
  }
}
