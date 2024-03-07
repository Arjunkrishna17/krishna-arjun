"use client";

import { Swiper } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";

import Image from "next/image";

// Import Swiper styles
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

interface props {
  children: React.ReactNode;
}

const SwipperContainer = ({ children }: props) => {
  return (
    <div className="relative z-30 w-full px-10 ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          500: { slidesPerView: 2 },
          1000: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        loop={true}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          el: ".my-custom-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return '<span class="' + className + " flex " + '">' + "</span>";
          },
        }}
        className="rounded-lg cursor-pointer "
      >
        {children}
      </Swiper>
    </div>
  );
};

export default SwipperContainer;
