import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";

import {
  DotsVerticalIcon,
  PencilAltIcon,
  TrashIcon,
  UserAddIcon,
} from "@heroicons/react/solid";
import { MainTitle } from "../components/MainTitle";
import { SideBar } from "../components/SideBar";
import { SideMenu } from "../components/SideMenu";
import { SectionTitle } from "../components/SectionTitle";
import { ActionMenu } from "../components/ActionMenu";

type User = {
  id: string;
  name: string;
  lastname: string;
  email: string;
};

const users: User[] = [
  {
    id: "1",
    name: "Maria",
    lastname: "Ramirez",
    email: "maria.ramirez@live.de",
  },
];

export default function Example() {
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

          {/* Projects table (small breakpoint and up) */}
          <div className="hidden mt-8 sm:block">
            <div className="align-middle inline-block min-w-full border-b border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr className="border-t border-gray-200">
                    <th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <span className="lg:pl-2">Name</span>
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Lastname
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" />
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
                        <div className="flex items-center space-x-2 lg:pl-2">
                          <span>{user.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-3 text-sm text-gray-500 font-medium">
                        <div className="flex items-center space-x-2">
                          <div className="flex flex-shrink-0 -space-x-1">
                            <span>{user.lastname}</span>
                          </div>
                        </div>
                      </td>
                      <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                        {user.email}
                      </td>
                      <td className="pr-6">
                        <ActionMenu />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
