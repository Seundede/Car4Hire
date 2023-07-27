import React from 'react'
import CustomButton from '../CustomButton';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-[20px] container mx-auto">
      <div className="pt-[60px] px-[10px] lg:px-[20px]">
        <h2 className="font-extrabold text-[50px] lg:text-[70px]">
          Premium Car Rental in Nigeria
        </h2>
        <p className="font-light mt-5 text-[30px] lg:text-[50px]">
          Don&apos;t deprive yourself of the pleasure of driving a top-tier
          luxury vehicle from around the world.
        </p>
        <CustomButton />
      </div>
    </div>
  );
}

export default Hero