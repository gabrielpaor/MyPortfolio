import React, { FC, JSX } from "react";
import Image from "next/image";

const Contact: FC = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full flex bg-slate-600 justify-center">
      <div className="min-w-[80%] flex flex-row self-center items-center justify-center bg-cyan-400">
        <div className="min-w-[70%] flex flex-col gap-1 bg-gray-700 p-24">
          <p>Contact me!</p>
          <p>Tell us more about job description</p>
          <div className="flex flex-row gap-3">
            <div className="flex flex-col">
              <label htmlFor="first-name">First name</label>
              <input
                type="text"
                name="first-name"
                placeholder="First"
                className="p-2 border-bottom bg-transparent border-b-2 border-gray-300"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="last-name">Last name</label>
              <input
                type="text"
                name="last-name"
                placeholder="Last"
                className="p-2 border-bottom bg-transparent border-b-2 border-gray-300"
              />
            </div>
          </div>
          <div className="flex flex-row gap-3 mt-3">
            <div className="flex flex-col">
              <label htmlFor="first-name">First name</label>
              <input
                type="text"
                name="first-name"
                placeholder="First"
                className="p-2 border-bottom bg-transparent border-b-2 border-gray-300"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="last-name">Last name</label>
              <input
                type="text"
                name="last-name"
                placeholder="Last"
                className="p-2 border-bottom bg-transparent border-b-2 border-gray-300"
              />
            </div>
          </div>
        </div>
        <div className="self-center items-center">
          <p>contact here</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
