import { Type } from "class-transformer";
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  Length,
  Validate
} from "class-validator";
import { IsGreaterThan } from "src/decorators/greaterThan";
import { VehiclePlateDoesNotExist } from "src/vehicle/vehicleExists.constraint";

export class VehicleDto {
  constructor() {
    const minDate = new Date();
    minDate.setSeconds(minDate.getSeconds() + 3600);
    this.minDate = minDate;
  }

  minDate: Date;

  @IsNotEmpty()
  @Length(4, 15, {
    message: "VIN must be between 4 and 15 characters"
  })
  vin: string;

  @IsNotEmpty()
  @Length(1, 30, { message: "Model must be between 1 and 30 characters" })
  model: string;

  @IsNotEmpty()
  color: string;

  @IsNotEmpty()
  @IsBoolean()
  active: boolean;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  @IsGreaterThan("minDate", { message: "Validity date must be in the future" })
  validTill: Date;

  @Validate(VehiclePlateDoesNotExist, {
    message: "A vehicle with this license plate already exists"
  })
  @IsNotEmpty()
  @Length(4, 15, {
    message: "License plate must be between 4 and 15 characters"
  })
  licensePlate: string;
}
