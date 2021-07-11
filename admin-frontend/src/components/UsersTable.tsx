import React from "react";
import { TUserList } from "../pages/Home";
interface TableProps {
  users: TUserList | undefined;
}

export const UsersTable: React.FC<TableProps> = ({ users }) => {
  return (
    <div className="sm:block p-4 ">
      <div className=" shadow align-middle inline-block min-w-full border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full">
          <thead>
            <tr className="border-gray-200">
              <th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span className="lg:pl-2">Name</span>
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lastname
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {users && users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center space-x-2 lg:pl-2">
                      <span>{user.firstName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-500 font-medium">
                    <div className="flex items-center space-x-2">
                      <div className="flex flex-shrink-0 -space-x-1">
                        <span>{user.lastName}</span>
                      </div>
                    </div>
                  </td>
                  <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                    {user.email}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-6 py-3 text-sm text-gray-500 font-medium">
                  Results not found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
