"use client";

import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";

import { projectData } from "../data/project";
import ProjectCard from "./Card";
import SwipperContainer from "./SwipperContainer";

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
        <SwipperContainer>
          {projectData.map((data) => (
            <SwiperSlide key={data.id}>
              <ProjectCard data={data} />
            </SwiperSlide>
          ))}
        </SwipperContainer>
      ) : (
        <div></div>
      )}
      <div className="z-50 h-20 flex w-full mt-5  items-center justify-center">
        <div className="my-custom-pagination space-x-5 flex justify-center"></div>
      </div>
    </section>
  );
};

export default Projects;
