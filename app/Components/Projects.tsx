"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import {
  EffectCoverflow,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";

import ProjectCard from "./Card";
import Image from "next/image";
import { projectData } from "../data/project";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="flex flex-col h-screen justify-center items-center text-white px-10 "
    >
      <h1 className="text-3xl text-white text-center w-full py-10">Projects</h1>

      <div className="relative z-50 w-full px-5 ">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{ 500: { slidesPerView: 3 } }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          navigation={{
            nextEl: ".swipeNext",
            prevEl: ".swipePrev",
          }}
          loop={true}
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          className="rounded-lg cursor-pointer mySwiper "
        >
          {projectData.map((data) => (
            <SwiperSlide key={data.id} className="">
              <ProjectCard data={data} />
            </SwiperSlide>
          ))}

          <div className="flex w-full mt-5 space-x-5 items-center justify-center">
            <div className="swipePrev">
              <Image src="Arrow.svg" alt="Arrow" width={30} height={30} />
            </div>

            <div className="swipeNext">
              <Image
                src="Arrow.svg"
                alt="Arrow"
                width={30}
                height={30}
                className="rotate-180"
              />
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
