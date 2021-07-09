import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from "class-validator";
import { Injectable } from "@nestjs/common";
import { Vehicle } from "./vehicle";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@ValidatorConstraint({ async: true })
@Injectable()
export class VehiclePlateDoesNotExist implements ValidatorConstraintInterface {
  constructor(
    @InjectRepository(Vehicle) private repository: Repository<Vehicle>
  ) {}

  async validate(licensePlate: string, args: ValidationArguments) {
    const vehicle = await this.repository.findOne({
      licensePlate: licensePlate
    });

    const isNotExistingVehicle = vehicle === undefined;
    return isNotExistingVehicle;
  }
}
