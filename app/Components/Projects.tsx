"use client";

import { projectData } from "../data/project";
import ProjectCard from "./Card";
import SwipperContainer from "./SwipperContainer";
import { SwiperSlide } from "swiper/react";

const Projects = () => {
  return (
    <SwipperContainer sectionName="Projects" id="Projects">
      {projectData.map((data) => (
        <SwiperSlide key={data.id} >
          <ProjectCard data={data} />
        </SwiperSlide>
      ))}
    </SwipperContainer>
  );
};

export default Projects;
