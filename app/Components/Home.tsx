"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { slideFromLeft, slideFromRight } from "../utils/motions";

const Home = () => {
  return (
    <div className="flex relative justify-center xl:justify-between h-full w-full items-center ">
      <div className="flex flex-col justify-center xl:justify-start xl:px-24 ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideFromLeft(0.3)}
        >
          <h1 className="flex flex-col items-center xl:items-start text-3xl sm:text-5xl xl:text-6xl text-white font-bold  gap-y-2  ">
            <span className="">Architecting </span>
            <span>the Digital Universe on </span>
            <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent w-fit">
              First Principles
            </span>
          </h1>
        </motion.div>

        <div className="flex flex-col text-center xl:text-start mt-5 text-xl text-white max-w-[500px]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideFromLeft(0.7)}
          >
            {" "}
            <p>
              {
                "I' m Krishnadas R, a full-stack engineer passionate about innovation and problem-solving."
              }
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative hidden xl:flex">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideFromRight(1)}
        >
          <Image
            src={"/universe.jpg"}
            width={600}
            height={600}
            className=" mix-blend-lighten "
            alt="Krishnadas"
          />

          <Image
            className="absolute top-[6.5rem] left-8 "
            src={"/avatar.png"}
            width={500}
            height={500}
            alt="Krishnadas"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
