import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="mb-4 p-2 flex flex-col gap-y-1 items-center bg-slate-300 md:flex-row md:gap-x-8 md:p-4">
      <Image src="/next.svg" width={100} height={100} alt="Next Js Logo" />
      <h1 className="font-semibold text-lg text-slate-900">Contact-O-Pedia</h1>
    </div>
  );
};

export default Header;
