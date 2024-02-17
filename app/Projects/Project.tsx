import React, { FC, JSX } from "react";
import Image from "next/image";

const Projects: FC = (): JSX.Element => {
  return (
    <div className="min-w-full flex flex-row gap-5 mt-4 justify-between">
      <div className="min-w-[49%] bg-gray-500 min-h-64">
        <p className="">project image here</p>
      </div>
      <div className="min-w-[49%] bg-gray-900">
        <p>Project description here</p>
      </div>
    </div>
  );
};

export default Projects;
