"use client";

import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";

import { projectData } from "../data/project";
import ProjectCard from "./Card";
import SwipperContainer from "./SwipperContainer";
import { Skeleton } from "@nextui-org/react";

const Projects = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <section
      id="Projects"
      className="flex flex-col  md:h-screen justify-center items-center text-white px-5 "
    >
      <h1 className="text-2xl md:text-4xl text-white text-center w-full py-10">
        Projects
      </h1>
      {domLoaded ? (
        <SwipperContainer id="Projects">
          {projectData.map((data) => (
            <SwiperSlide key={data.id}>
              <ProjectCard data={data} />
            </SwiperSlide>
          ))}
        </SwipperContainer>
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default Projects;
