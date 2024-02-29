"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface props {
  src: string;
  index: number;
}

import React from "react";
import Image from "next/image";

const SkillsetAnimator = ({ src, index }: props) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const imageVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      custom={index}
      ref={ref}
      initial="hidden"
      variants={imageVariant}
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * 0.2 }}
    >
      <Image
        src={src}
        alt={src}
        width={60}
        height={60}
        className="w-10 h-10 lg:w-16 lg:h-16"
      />
    </motion.div>
  );
};

export default SkillsetAnimator;
