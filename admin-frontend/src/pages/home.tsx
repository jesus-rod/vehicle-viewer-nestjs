import { MainTitle } from "../components/MainTitle";
import { SideBar } from "../components/SideBar";
import { SideMenu } from "../components/SideMenu";
import { SectionTitle } from "../components/SectionTitle";
import axios from "axios";
import { useEffect, useState } from "react";

import { Search } from "../components/Search";
import { UsersTable } from "../components/UsersTable";
import { VehiclesTable } from "../components/VehiclesTable";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
};

type Vehicle = {
  licensePlate: string;
  vin: string;
  color: string;
  model: string;
  active: boolean;
  validTill: Date;
};

export type TUserList = User[];
export type TVehicleList = Vehicle[];

export default function Home() {
  const [isCreatingVehicle, setIsCreatingVehicle] = useState(false);
  const [users, setUsers] = useState<TUserList>();
  const [vehicles, setVehicles] = useState<TVehicleList>();
  useEffect(() => {
    fetchAllUsers();
    fetchAllVehicles();
  }, []);

  const fetchAllUsers = () => {
    axios
      .get<TUserList>("http://localhost:8080/api/v1/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("--->", error);
      });
  };

  const fetchAllVehicles = () => {
    axios
      .get<TVehicleList>(`http://localhost:8080/api/v1/vehicles`)
      .then((response) => {
        response.data && setVehicles(response.data);
      })
      .catch((error) => {
        console.log("--->", error);
      });
  };

  const fetchUsersByLastName = (lastname: string) => {
    axios
      .get<TUserList>(`http://localhost:8080/api/v1/users/lastname/${lastname}`)
      .then((response) => {
        response.data && setUsers(response.data);
      })
      .catch((error) => {
        console.log("--->", error);
      });
  };

  const showCreateVehicle = () => {};

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <SideBar />

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <MainTitle />
          <SectionTitle title="Users" />
          <Search
            onTextChange={fetchUsersByLastName}
            onEmptyText={fetchAllUsers}
          />
          <UsersTable users={users} />

          <div className="sm:flex sm:items-center sm:justify-between pr-4">
            <SectionTitle title="Vehicles" />
            <div className="mt-8 flex">
              <button
                type="button"
                className="items-center px-4 py-2 
                border border-transparent
                shadow-sm text-sm font-medium
                rounded-md text-white bg-red-darker 
                hover:bg-red-default focus:outline-none
                focus:ring-0 focus:ring-offset-0"
                onClick={showCreateVehicle}
              >
                Create
              </button>
            </div>
          </div>

          <VehiclesTable vehicles={vehicles} />
        </main>
      </div>
    </div>
  );
}
