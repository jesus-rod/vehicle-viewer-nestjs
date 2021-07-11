import { Menu } from "@headlessui/react";
import React from "react";
import { SideMenu } from "./SideMenu";

interface SideBarProps {}

export const SideBar: React.FC<SideBarProps> = ({}) => {
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100">
        <div className="h-0 flex-1 flex flex-col overflow-y-auto">
          <Menu as="div" className="px-3 mt-6 relative inline-block text-left">
            <div>
              <Menu.Button className="group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500">
                <span className="flex w-full justify-between items-center">
                  <span className="flex min-w-0 items-center justify-between space-x-3">
                    <img
                      className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                      src="../../images/circularboy.png"
                      alt="avatar-audi"
                    />
                    <span className="flex-1 flex flex-col min-w-0">
                      <span className="text-gray-900 text-sm font-medium truncate">
                        Jesus Rodriguez
                      </span>
                      <span className="text-gray-500 text-sm truncate">
                        @codingjesus
                      </span>
                    </span>
                  </span>
                </span>
              </Menu.Button>
            </div>
          </Menu>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};
