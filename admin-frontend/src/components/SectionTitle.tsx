import React from "react";

interface SectionTitleProps {
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="mt-10">
      <div className="px-4 sm:px-6">
        <h2 className="text-gray-500 text-xl font-medium uppercase tracking-wide">
          {title}
        </h2>
      </div>
    </div>
  );
};
