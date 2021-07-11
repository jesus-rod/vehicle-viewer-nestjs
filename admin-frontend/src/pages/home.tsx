import { MainTitle } from "../components/MainTitle";
import { SideBar } from "../components/SideBar";
import { SectionTitle } from "../components/SectionTitle";
import axios from "axios";
import { useEffect, useState } from "react";

import { Search } from "../components/Search";
import { UsersTable } from "../components/UsersTable";
import { VehiclesTable } from "../components/VehiclesTable";
import {
  CreationStatus,
  VehicleCreationDialog,
} from "../components/VehicleCreationDialog";
import { Notification } from "../components/Notification";
import { User, Vehicle } from "../types/types";
import { SideMenu } from "../components/SideMenu";

export type TUserList = User[];
export type TVehicleList = Vehicle[];

export default function Home() {
  const [isCreatingVehicle, setIsCreatingVehicle] = useState(false);
  const [users, setUsers] = useState<TUserList>();
  const [vehicles, setVehicles] = useState<TVehicleList>();
  const [shouldShowNotification, setShouldShowNotification] = useState(false);
  const [showUsers, setShowUsers] = useState(true);
  const [showVehicles, setShowVehicles] = useState(true);

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
        //TODO show toast on fetch error
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
        //TODO show toast on fetch error
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
        //TODO show toast on fetch error
      });
  };

  const showCreateVehicle = () => {
    setIsCreatingVehicle(true);
  };

  const handleVehicleDialog = (status: CreationStatus) => {
    setIsCreatingVehicle(false);

    switch (status) {
      case CreationStatus.Success:
        fetchAllVehicles();
        setShouldShowNotification(true);
        break;
      case CreationStatus.Failure:
        break;
      case CreationStatus.None:
        break;
    }
  };

  const onShowUsers = () => {
    setShowUsers(!showUsers);
  };

  const onShowVehicles = () => {
    setShowVehicles(!showVehicles);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <SideBar>
        <SideMenu onShowUsers={onShowUsers} onShowVehicles={onShowVehicles} />
      </SideBar>

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <MainTitle />

          {showUsers && (
            <div>
              <SectionTitle title="Users" />
              <Search
                onTextChange={fetchUsersByLastName}
                onEmptyText={fetchAllUsers}
              />
              <UsersTable users={users} />
            </div>
          )}

          {showVehicles && (
            <div>
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
                    New Vehicle
                  </button>
                </div>
              </div>
              <VehiclesTable vehicles={vehicles} />
            </div>
          )}

          <VehicleCreationDialog
            isOpen={isCreatingVehicle}
            onClose={(status) => {
              handleVehicleDialog(status);
            }}
          />

          <Notification
            shouldShow={shouldShowNotification}
            onHide={() => {
              setShouldShowNotification(false);
            }}
          />
        </main>
      </div>
    </div>
  );
}
