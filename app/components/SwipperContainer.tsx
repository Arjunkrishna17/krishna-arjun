"use client";

import { Swiper } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";

import Image from "next/image";
import { useRef, useState } from "react";

// Import Swiper styles
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { onTouchEnd, onTouchStart } from "../utils/EventHandler";

interface props {
  children: (isClick: boolean) => React.ReactNode;
}

const SwipperContainer = ({ children }: props) => {
  const touchStart = useRef(0);
  const [isClick, setIsClick] = useState(false);

  return (
    <div className="relative z-30 w-full px-10 ">
      <Swiper
        onTouchStart={(e) => onTouchStart(e, touchStart)}
        onTouchEnd={(e) => onTouchEnd(e, touchStart, setIsClick)}
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
        {children(isClick)}

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
  );
};

export default SwipperContainer;
