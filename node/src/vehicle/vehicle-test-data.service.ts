import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Vehicle } from "./vehicle";
import { Repository } from "typeorm";
import { Builder } from "builder-pattern";

/**
 * Insert some test vehicles
 */
@Injectable()
export class VehicleTestDataService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>
  ) {
    this.insertTestVehicles().catch(e => console.error(e));
  }

  private async insertTestVehicles() {
    const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);

    await this.vehicleRepository.insert(
      Builder<Vehicle>()
        .licensePlate("IN-1234")
        .model("S4")
        .color("red")
        .active(true)
        .vin("8765-4321")
        .validTill(tomorrow)
        .build()
    );

    await this.vehicleRepository.insert(
      Builder<Vehicle>()
        .licensePlate("IN-5678")
        .model("Q3")
        .color("black")
        .active(true)
        .vin("1234-4321")
        .validTill(tomorrow)
        .build()
    );
  }
}
