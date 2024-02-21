import React, { FC, JSX } from "react";
import Image from "next/image";

const Introduction: FC = (): JSX.Element => {
  return (
    <div className="custom-height flex px-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-gray-100">
      <div className="flex-row justify-between flex w-full">
        <div className="text-wrap max-w-[50%] flex flex-col gap-5 pt-[13%]">
          <h1 className="text-4xl font-bold">Gabriel John Paor</h1>
          <p className="text-5xl font-bold">FRONT END</p>
          <p className="text-5xl font-bold">DEVELOPER</p>
          <div className="flex flex-row gap-3">
            <button className="bg-green-500 w-32 py-2 rounded shadow-lg">
              <a href="" className="custom-font-size font-semibold">
                Contact me
              </a>
            </button>
            <button className="bg-gray-600 w-32 py-2 rounded shadow-lg">
              <a href="" className="custom-font-size font-semibold">
                Projects
              </a>
            </button>
          </div>
          <p className="mt-5">
            My mission is to become a proficient and sought-after frontend
            developer, leveraging my skills in React Framework to create dynamic
            and user-friendly web applications while continuously learning and
            staying updated with the latest technologies and best practices.
          </p>
        </div>
        <div className="justify-center flex items-end w-full rounded-full">
          <Image
            src={require("./../../public/images/profile-image.png")}
            alt=""
            width={600}
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
