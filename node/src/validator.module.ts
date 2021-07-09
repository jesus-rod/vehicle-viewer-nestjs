import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Vehicle } from "./vehicle/vehicle";
import { VehiclePlateDoesNotExist } from "./vehicle/vehicleExists.constraint";

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle])],
  providers: [VehiclePlateDoesNotExist]
})
export class ValidatorModule {}
