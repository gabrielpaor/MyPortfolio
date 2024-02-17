import React, { FC, JSX } from "react";
import Image from "next/image";
import Project from "./Project";
import { projects } from "../projects";

const Projects: FC = (): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="text-wrap max-w-[50%] flex flex-col gap-5 self-center items-center pt-12">
        <h1 className="text-lg text-blue-200">Projects</h1>
        <p>Here are some of the projects I have worked on</p>
      </div>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
