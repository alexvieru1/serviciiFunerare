"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedCounter from "@/components/animated-counter";

const Despre = () => {
  return (
    <div className="flex 4xs:flex-col lg:flex-row justify-around">
      <div className="flex 4xs:flex-col lg:flex-row justify-around 4xs:w-full lg:w-[80%] mt-4">
        <div className="flex justify-end items-center  min-h-[70vh] lg:w-[50vw] lg:mr-5">
          <div className="flex-col justify-start  items-start text-end px-5 z-10">
            <motion.div
              className="border-white border-t-[20px] border-b-[20px] border-r-[15px]"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{
                opacity: 1,
                x: 100,
                transition: { duration: 1, delay: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <Image src="/images/1.jpg" width={600} height={600} alt="img" />
            </motion.div>
            <motion.div
              className="p-2"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 1 },
              }}
              viewport={{ once: true }}
            >
              <AnimatedCounter
                count={50}
                classNameText="text-2xl text-[#9c6b01] font-semibold"
                classNameDiv="flex flex-row justify-end items-end"
                delayAmount={3}
                classNameSup="my-auto text-lg text-[#9c6b01] font-semibold"
              />
              <h1 className="font-semibold"> ani de experienta</h1>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{
              opacity: 1,
              x: -10,
              transition: { duration: 1, delay: 2 },
            }}
            viewport={{ once: true }}
          >
            <Image src="/images/1.jpg" width={1000} height={1000} alt="img" />
          </motion.div>
        </div>
        <div className=" min-h-[70vh] lg:w-[50vw] lg:ml-5 flex flex-col p-10">
          <h6 className="text-md font-[Cinzel] text-[#9c6b01] ">DESPRE NOI</h6>
          <h2 className="text-xl text-center font-semibold mt-4">TEXT</h2>
          <div className="gap-y-2 text-md text-start">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore e
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore e
            </p>
          </div>
          <div className="flex justify-between mt-6 items-center">
            <motion.div
              className="p-2 mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 1 },
              }}
              viewport={{ once: true }}
            >
              <AnimatedCounter
                count={110000}
                classNameText="4xs:text-4xl md:text-2xl text-[#9c6b01] font-semibold"
                classNameDiv="flex flex-row justify-end items-end"
                delayAmount={3}
                classNameSup="my-auto text-lg text-[#9c6b01] font-semibold"
              />
              <h1 className="4xs:text-lg 4xs:text-center md:text-start md:text-base font-semibold">
                servicii funerare
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 2 },
              }}
              viewport={{ once: true }}
            >
              <Image
                className="4xs:hidden md:block"
                src="/images/image-3.jpg"
                width={300}
                height={150}
                alt="img"
              />
            </motion.div>
          </div>
          <div className="flex mt-10 justify-end items-end">
            <Link href="/despre">
              <Button className="bg-[#9c6b01] hover:bg-[#9c6b01]/75">
                MAI MULTE
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Despre;
