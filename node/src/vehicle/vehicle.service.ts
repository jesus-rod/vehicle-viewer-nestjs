import { Injectable } from "@nestjs/common";
import { Vehicle } from "./vehicle";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { VehicleDto } from "../dto/vehicle.dto";

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>
  ) {}

  getAll(): Promise<Vehicle[]> {
    return this.vehicleRepository.find();
  }

  async create(vehicleDto: VehicleDto): Promise<Vehicle> {
    const newVehicle = new Vehicle();
    newVehicle.vin = vehicleDto.vin;
    newVehicle.model = vehicleDto.model;
    newVehicle.color = vehicleDto.color;
    newVehicle.active = vehicleDto.active;
    newVehicle.validTill = vehicleDto.validTill;
    newVehicle.licensePlate = vehicleDto.licensePlate;
    return this.vehicleRepository.save(newVehicle);
  }
}
