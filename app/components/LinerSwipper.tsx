import React, { useRef, useState } from "react";

import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { onTouchEnd, onTouchStart } from "../utils/EventHandler";

interface props {
  children: (isClick: boolean) => React.ReactNode;
}

const LinerSwipper = ({ children }: props) => {
  const touchStart = useRef(0);
  const [isClick, setIsClick] = useState(false);

  return (
    <Swiper
      onTouchStart={(e) => onTouchStart(e, touchStart)}
      onTouchEnd={(e) => onTouchEnd(e, touchStart, setIsClick)}
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
          return '<span class="' + className + " flex " + '">' + "</span>";
        },
      }}
      className="mySwiper  flex w-full "
      modules={[Autoplay, Pagination, Navigation]}
    >
      {children(isClick)}
    </Swiper>
  );
};

export default LinerSwipper;
