"use client";

import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { SwiperSlide } from "swiper/react";

import SwipperContainer from "./SwipperContainer";
import { blogData } from "../data/blog";
import BlogCard from "./BlogCard";
import LinerSwipper from "./LinerSwipper";
import { motion } from "framer-motion";
import { slideFromRight } from "../utils/motions";

const Blogs = () => {
  return (
    <section
      id="Blog"
      className="flex flex-col h-screen justify-center items-center text-white px-10 "
    >
      <h1 className="text-2xl md:text-4xl text-white text-center w-full py-10">
        Blog
      </h1>

      <div className="block w-full relative z-30 px-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideFromRight(0.8)}
        >
          <LinerSwipper>
            {blogData.map((data) => (
              <SwiperSlide key={data.name}>
                <BlogCard src={data.img} heading={data.name} link={data.link} />
              </SwiperSlide>
            ))}
          </LinerSwipper>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
