import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay, Navigation } from "swiper/modules";

interface props {
  children: React.ReactNode;
}

const LinerSwipper = ({ children }: props) => {
  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        850: { slidesPerView: 2 },
        1125: { slidesPerView: 3 },
        1370: { slidesPerView: 4 },
      }}
      spaceBetween={30}
      grabCursor={true}
      pagination={{
        el: ".my-custom-pagination-div",
        clickable: true,
        renderBullet: (index, className) => {
          return '<span class="' + className +" flex "+ '">' + "</span>";
        },
      }}
      className="mySwiper  flex w-full "
      modules={[Autoplay, Pagination, Navigation]}
    >
      {children}
    </Swiper>
  );
};

export default LinerSwipper;
