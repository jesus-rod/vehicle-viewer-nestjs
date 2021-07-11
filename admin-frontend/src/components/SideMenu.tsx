import { UserGroupIcon, ViewListIcon } from "@heroicons/react/outline";
import React from "react";

interface SideMenuProps {}

const navigation = [
  { name: "Users", href: "#", icon: UserGroupIcon, current: true },
  { name: "Vehicles", href: "#", icon: ViewListIcon, current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const handleClick = () => {
  console.log("clicked index");
};

export const SideMenu: React.FC<SideMenuProps> = ({}) => {
  return (
    <nav className="px-3 mt-6">
      <div className="space-y-1">
        {navigation.map((item, index) => (
          <a
            key={item.name}
            onClick={handleClick}
            href={item.href}
            className={classNames(
              item.current
                ? "bg-gray-200 text-gray-900"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-50",
              "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            <item.icon
              className={classNames(
                item.current
                  ? "text-gray-500"
                  : "text-gray-400 group-hover:text-gray-500",
                "mr-3 flex-shrink-0 h-6 w-6"
              )}
              aria-hidden="true"
            />
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};
