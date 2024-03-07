"use client";

import { SwiperSlide } from "swiper/react";

import { blogData } from "../data/blog";
import BlogCard from "./BlogCard";
import LinerSwipper from "./LinerSwipper";
import { motion } from "framer-motion";
import { slideFromRight } from "../utils/motions";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <section
      id="Blog"
      className="flex flex-col h-screen justify-center items-center text-white  md:px-10 "
    >
      <h1 className="text-2xl md:text-4xl text-white text-center w-full py-10">
        Blog
      </h1>

      <div className="w-full relative z-30 ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideFromRight(0.8)}
          className="flex flex-col w-full"
        >
          {domLoaded ? <LinerSwipper>
            {
              (isClick) =>
                blogData.map((data) => (
                  <SwiperSlide key={data.name}>
                    <BlogCard
                      isClick={isClick}
                      src={data.img}
                      heading={data.name}
                      link={data.link}
                    />
                  </SwiperSlide>
                ))
            }
          </LinerSwipper> : 
            <div></div>
          }
          <div className="h-20 flex w-full mt-5  items-center justify-center">
            <div className="my-custom-pagination-div space-x-5 flex justify-center"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
