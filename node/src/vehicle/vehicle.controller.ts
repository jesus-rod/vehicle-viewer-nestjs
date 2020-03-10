import { Controller, Get } from "@nestjs/common";
import { Vehicle } from "./vehicle";
import { VehicleService } from "./vehicle.service";

@Controller("vehicles")
export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  @Get()
  public async getVehicles(): Promise<Vehicle[]> {
    return this.vehicleService.getAll();
  }
}
