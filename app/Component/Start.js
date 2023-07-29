'use client';
import React from "react";
import Link from "next/link";
import CircleText from "../picture/CircleText";
import { motion } from "framer-motion";



const Start = () => {
  return (
    <div className="flex items-center justify-center absolute">
        <motion.div className="w-80 h-auto flex items-center justify-center animate-spin-slow absolute">
            <CircleText />
        </motion.div>
        <div className="">
        <Link href='#' className="  bg-black text-xl flex items-center justify-center left-1/2 top-1/2 translate-x-15 -translat-y-1/2
         text-white text-center shadow-md border border-solid border-dark w-40 h-40 rounded-full fontSemibold">
            Start <br/>
            Design</Link>
        </div>
    </div>
  );
};

export default Start;