import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse
} from "@nestjs/swagger";
import { Vehicle } from "./vehicle";
import { VehicleDto } from "../dto/vehicle.dto";
import { VehicleService } from "./vehicle.service";
import { UsePipes } from "@nestjs/common";

@Controller("vehicles")
@UsePipes(new ValidationPipe())
export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  @Get()
  @ApiOkResponse({ type: VehicleDto, isArray: true })
  public async getVehicles(): Promise<Vehicle[]> {
    return this.vehicleService.getAll();
  }

  @Post()
  @ApiCreatedResponse({ type: VehicleDto })
  @ApiBadRequestResponse({ description: "Vehicle data is not valid" })
  public async createVehicle(
    @Body() vehicleDto: VehicleDto
  ): Promise<Vehicle | void> {
    return this.vehicleService.create(vehicleDto);
  }
}
