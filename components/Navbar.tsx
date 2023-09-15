import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex grid-rows-2 bg-[#0B629C] text-white">
      <div className="flex justify-center py-[4vh] basis-1/2">
        <Image
          src="/Images/AstiLogo.png"
          alt=""
          width={60}
          height={60}
          className="w-[10vh] h-[10vh]"
        />
        <h1 className="text-[7vh]">ASTI clubs</h1>
      </div>
      <div className="flex justify-center py-[6vh] basis-1/2 text-[5vh]">
        <Link href="/Info" className="px-[5vh]">
          Info
        </Link>
        <Link href="/Clubs" className="px-[5vh]">
          Clubs
        </Link>
        <Link href="/Contact" className="px-[5vh]">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
