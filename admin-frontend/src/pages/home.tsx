import { MainTitle } from "../components/MainTitle";
import { SideBar } from "../components/SideBar";
import { SectionTitle } from "../components/SectionTitle";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

import { Search } from "../components/Search";
import { UsersTable } from "../components/UsersTable";
import { VehiclesTable } from "../components/VehiclesTable";
import { VehicleCreationDialog } from "../components/VehicleCreationDialog";
import { Notification } from "../components/Notification";
import { RequestStatus, TUserList, TVehicleList } from "../types/types";
import { SideMenu } from "../components/SideMenu";

export default function Home() {
  const [isCreatingVehicle, setIsCreatingVehicle] = useState(false);
  const [users, setUsers] = useState<TUserList>();
  const [vehicles, setVehicles] = useState<TVehicleList>();
  const [shouldShowNotification, setShouldShowNotification] =
    useState<RequestStatus>(RequestStatus.None);
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
        response.data && setUsers(response.data);
      });
  };

  const fetchAllVehicles = () => {
    axios
      .get<TVehicleList>(`http://localhost:8080/api/v1/vehicles`)
      .then((response) => {
        response.data && setVehicles(response.data);
      });
  };

  const fetchUsersByLastName = (lastname: string) => {
    axios
      .get<TUserList>(`http://localhost:8080/api/v1/users/lastname/${lastname}`)
      .then((response) => {
        response.data && setUsers(response.data);
      });
  };

  const showCreateVehicle = () => {
    setIsCreatingVehicle(true);
  };

  const handleInteractionDialog = (status: RequestStatus) => {
    setIsCreatingVehicle(false);

    switch (status) {
      case RequestStatus.Success:
        fetchAllVehicles();
        setShouldShowNotification(RequestStatus.Success);
        break;
      case RequestStatus.Failure:
        setShouldShowNotification(RequestStatus.Failure);
        break;
      case RequestStatus.None:
        setShouldShowNotification(RequestStatus.None);
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
              <UsersTable users={users ?? []} />
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
              <VehiclesTable vehicles={vehicles ?? []} />
            </div>
          )}

          <VehicleCreationDialog
            isOpen={isCreatingVehicle}
            onClose={(status) => {
              handleInteractionDialog(status);
            }}
          />

          <Notification
            shouldShow={shouldShowNotification !== RequestStatus.None}
            onHide={() => {
              setShouldShowNotification(RequestStatus.None);
            }}
          />
        </main>
      </div>
    </div>
  );
}
