"use client";
import React from "react";
import CustomButton from "../CustomButton";

const handleScroll = () => {};

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:justify-between gap-[20px] container mx-auto">
      <div className="pt-[60px] px-[10px] lg:px-[20px]">
        <h2 className="font-extrabold text-[40px] lg:text-[70px]">
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
      <div className="pt-[60px]">image</div>
    </section>
  );
};

export default Hero;
