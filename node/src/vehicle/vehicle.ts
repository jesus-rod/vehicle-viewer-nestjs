import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "vehicles"
})
export class Vehicle {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  licensePlate: string;

  @Column()
  vin: string;

  @Column()
  model: string;

  @Column()
  active: boolean;

  @Column()
  color: string;

  @Column()
  validTill: Date;
}
