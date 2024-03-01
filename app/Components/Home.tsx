"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { slideFromLeft, slideFromRight } from "../utils/motions";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Home = () => {
  return (
    <section
      id="Home"
      className="flex relative  justify-center h-screen  xl:justify-between w-full items-center px-5 "
    >
      <div className="flex flex-col justify-center  items-center py-24 xl:py-0 xl:justify-start xl:px-24 ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideFromLeft(0.3)}
        >
          <h1 className="flex flex-col items-center xl:items-start text-3xl sm:text-5xl xl:text-6xl text-white font-bold  gap-y-2  ">
            <span className="">Architecting </span>
            <span className="text-center">the Digital Universe on </span>
            <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent w-fit">
              First Principles
            </span>
          </h1>

          <div className="flex flex-col text-center xl:text-start mt-5 text-xl text-white max-w-[500px]">
            <p>
              {
                "I' m Krishnadas R, a full-stack engineer passionate about innovation and problem-solving."
              }
            </p>
          </div>
          <Link
            target="_blank"
            href="https://diversio-product-images.s3.amazonaws.com/CV/Krishnadas+R.pdf"
          >
            <div className="flex w-full justify-center">
              <Button className="relative z-30 bg-transparent border text-white shadow-xl hover:bg-black mt-10  shadow-indigo-900">
                Get My Resume
              </Button>
            </div>
          </Link>
        </motion.div>
      </div>

      <div className="relative hidden xl:flex   ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideFromRight(1)}
        >
          <Image
            src={"/universe.jpg"}
            width={600}
            height={600}
            className=" mix-blend-lighten ml-12 -mt-3"
            alt="universe"
          />

          <Image
            className="absolute top-[4rem] left-8 "
            src={"/avatar.png"}
            width={500}
            height={500}
            alt="Krishnadas"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
