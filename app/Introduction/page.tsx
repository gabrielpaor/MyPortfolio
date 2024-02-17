import React, { FC, JSX } from "react";

const Introduction: FC = (): JSX.Element => {
  return (
    <div className="min-h-screen flex">
      <div className="flex-row justify-between flex w-full space-x-10">
        <div className="text-wrap max-w-[50%] flex flex-col gap-5 pt-[10%]">
          <h1 className="text-xs text-blue-200">Frontend Developer</h1>
          <p>Hi, I am a frontend developer using React Framework</p>
          <p>
            1 year of experience in frontend development as part-time junior
            developer.
          </p>
          <p>
            My mission is to become a proficient and sought-after frontend
            developer, leveraging my skills in React Framework to create dynamic
            and user-friendly web applications while continuously learning and
            staying updated with the latest technologies and best practices.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full max-w-32">
            Contact me
          </button>
        </div>
        <div className="justify-center flex items-center w-full bg-gray-400">
          <p>image here</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
