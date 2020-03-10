import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "users"
})
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  birthday: Date;
}
