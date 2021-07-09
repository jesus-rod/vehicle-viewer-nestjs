import { Type } from "class-transformer";
import {
  IsBoolean,
  IsDate,
  IsHexColor,
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
  @Length(4, 15)
  vin: string;

  @IsNotEmpty()
  @Length(1, 30)
  model: string;

  @IsNotEmpty()
  @IsHexColor()
  color: string;

  @IsNotEmpty()
  @IsBoolean()
  active: boolean;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  @IsGreaterThan("minDate", { message: "validTill must be in the future" })
  validTill: Date;

  @Validate(VehiclePlateDoesNotExist, {
    message: "A vehicle with this license plate already exists"
  })
  @IsNotEmpty()
  @Length(4, 15)
  licensePlate: string;
}
