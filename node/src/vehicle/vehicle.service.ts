import { Injectable } from "@nestjs/common";
import { Vehicle } from "./vehicle";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>
  ) {}

  getAll(): Promise<Vehicle[]> {
    return this.vehicleRepository.find();
  }
}
