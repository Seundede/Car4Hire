import React from "react";
import { BsCarFrontFill } from "react-icons/bs";
import CustomButton from "../CustomButton";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className="px-[20px] lg:px-[40px] w-full h-[75px]  text-black flex items-center justify-between">
      <Link href="/">
        <BsCarFrontFill size={35} />
      </Link>
      <ul className="flex items-center flex-row gap-x-[25px] cursor-pointer">
        <li>
          <Link href="/">About Us</Link>
        </li>
        <li>
          <Link href="/"> Cars</Link>
        </li>
        <li className="rounded-full px-4 py-2 border border-black">
          <Link href="/"> Contact Us</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
