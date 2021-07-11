export enum RequestStatus {
  Success,
  Failure,
  None,
}

export type TUserList = User[];
export type TVehicleList = Vehicle[];

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
};

export type Vehicle = {
  licensePlate: string;
  vin: string;
  color: string;
  model: string;
  active: boolean;
  validTill: Date;
};
