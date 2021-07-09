import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity({
  name: "vehicles"
})
export class Vehicle {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, nullable: false })
  licensePlate: string;

  @Column({ nullable: false })
  vin: string;

  @Column({ nullable: false })
  model: string;

  @Column({ nullable: false })
  active: boolean;

  @Column({ nullable: false })
  color: string;

  @Column({ nullable: false })
  validTill: Date;
}
