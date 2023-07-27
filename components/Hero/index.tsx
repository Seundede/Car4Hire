"use client";
import React from "react";
import CustomButton from "../CustomButton";
import Image from "next/image";

const handleScroll = () => {};

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center px-[20px] lg:px-[40px] ">
      <div className="pt-[60px] ">
        <h2 className="font-bold text-[40px] lg:text-[70px]">
          Premium Car Rental in Nigeria
        </h2>
        <p className="font-light mt-5 text-[20px] lg:text-[50px]">
          Don&apos;t deprive yourself of the pleasure of driving a top-tier
          luxury vehicle from around the world.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="text-black rounded-full mt-10 border border-black"
          handleClick={handleScroll}
        />
      </div>
      <div className="pt-[60px]">
        <Image src="/hero.jpg" alt="hero image" width={1500} height={1500} />
      </div>
    </section>
  );
};

export default Hero;
