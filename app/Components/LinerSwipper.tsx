import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

interface props {
  children: React.ReactNode;
}

const LinerSwipper = ({ children }: props) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      grabCursor={true}
      centeredSlides={false}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
      loop={true}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
    >
      {children}
    </Swiper>
  );
};

export default LinerSwipper;
