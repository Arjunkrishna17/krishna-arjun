"use client";

import React, { ReactElement, useRef, useState } from "react";
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

import Image from "next/image";

interface props {
  children: React.ReactNode;
  sectionName: string;
  id: string;
}

const SwipperContainer = ({ children, sectionName, id }: props) => {
  return (
    <section
      id={id}
      className="flex flex-col h-screen justify-center items-center text-white px-10 "
    >
      <h1 className="text-2xl md:text-4xl text-white text-center w-full py-10">
        {sectionName}
      </h1>

      <div className="relative z-30 w-full px-5 ">
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
            delay: 3000,
            disableOnInteraction: true,
          }}
          className="rounded-lg cursor-pointer "
        >
          {children}

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

export default SwipperContainer;
