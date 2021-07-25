import { SearchIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

interface SearchProps {
  onTextChange: (value: string) => void;
  onEmptyText: () => void;
}

export const Search: React.FC<SearchProps> = ({
  onTextChange,
  onEmptyText,
}) => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;

    if (newValue) {
      onTextChange(newValue);
      return;
    }
    onEmptyText();
  };

  return (
    <div className="px-3 mt-5">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div
          className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          aria-hidden="true"
        >
          <SearchIcon
            className="mr-3 h-4 w-4 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          type="text"
          name="search"
          id="search"
          className="p-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 sm:text-sm border-gray-300 rounded-md"
          placeholder="Search by lastname"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
