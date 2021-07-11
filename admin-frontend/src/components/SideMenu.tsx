import {
  EyeIcon,
  EyeOffIcon,
  UserGroupIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type NavItem = {
  name: string;
  href: string;
  icon: any;
  current: boolean;
};
const initialNavigation: NavItem[] = [
  {
    name: "Users",
    href: "#",
    icon: UserGroupIcon,
    current: true,
  },
  {
    name: "Vehicles",
    href: "#",
    icon: ViewListIcon,
    current: true,
  },
];

type MenuProps = {
  onShowUsers: () => void;
  onShowVehicles: () => void;
};

export const SideMenu: React.FC<MenuProps> = ({
  onShowUsers,
  onShowVehicles,
}) => {
  const [navigation, setNavigation] = useState(initialNavigation);

  const updateNavigation = (index: number) => {
    console.log("select", index);
    let updatedNavigation: NavItem[] = [...navigation];
    updatedNavigation[index].current = !updatedNavigation[index].current;
    setNavigation(updatedNavigation);

    if (index === 0) {
      onShowUsers();
      return;
    }

    onShowVehicles();
  };

  return (
    <nav className="px-3 mt-6">
      <div className="space-y-1">
        {navigation.map((item, index) => (
          <a
            key={item.name}
            onClick={() => {
              updateNavigation(index);
            }}
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
            {item.current ? (
              <span>
                <EyeIcon className="px-2 py-2 font-medium" />
              </span>
            ) : (
              <span>
                <EyeOffIcon className="px-2 py-2 font-medium" />
              </span>
            )}
          </a>
        ))}
      </div>
    </nav>
  );
};
