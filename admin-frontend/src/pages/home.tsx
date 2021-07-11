import { MainTitle } from "../components/MainTitle";
import { SideBar } from "../components/SideBar";
import { SideMenu } from "../components/SideMenu";
import { SectionTitle } from "../components/SectionTitle";
import axios from "axios";
import { useEffect, useState } from "react";

import { Search } from "../components/Search";
import { UsersTable } from "../components/UsersTable";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
};

export type TUserList = User[];

export default function Home() {
  const [users, setUsers] = useState<TUserList>();
  useEffect(() => {
    fetchAllUsers();
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

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="h-0 flex-1 flex flex-col overflow-y-auto">
            {/* User account / Sidebar Info */}
            <SideBar />
            <SideMenu />
            {/* Navigation */}
          </div>
        </div>
      </div>
      {/* Main column */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          {/* Page title & actions */}
          <MainTitle />
          <SectionTitle title="Users" />
          <Search
            onTextChange={fetchUsersByLastName}
            onEmptyText={fetchAllUsers}
          />
          <UsersTable users={users} />
        </main>
      </div>
    </div>
  );
}
