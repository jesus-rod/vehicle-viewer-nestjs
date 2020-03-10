import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Vehicle } from "./vehicle";
import { VehicleService } from "./vehicle.service";
import { VehicleController } from "./vehicle.controller";
import { VehicleTestDataService } from "./vehicle-test-data.service";

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle])],
  providers: [VehicleService, VehicleTestDataService],
  controllers: [VehicleController]
})
export class VehicleModule {}
