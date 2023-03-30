import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="mb-2 p-2 flex flex-row items-center gap-x-2 content-start border border-slate-100 rounded-xl md:gap-x-6">
      <div className="flex h-10">
        <Image
          loader={({ src }) =>
            `https://ui-avatars.com/api/?name=${encodeURIComponent(src)}`
          }
          src="nirjhar joshi"
          alt="user image"
          width={50}
          height={50}
        />
      </div>
      <div>
        <h3 className="text-lg font-bold text-yellow-400">Nirjhar Joshi</h3>
        <h5 className="text-sm text-slate-100">sabkabadla@gmail.com</h5>
        <h5 className="text-sm text-slate-100">1234567890</h5>
      </div>
      <div className="flex flex-col text-xs">
        <button className="p-1 rounded-md bg-yellow-400 text-slate-950">
          <i className="fa-regular fa-star"></i>
        </button>
        <button className="my-1 p-1 rounded-md bg-blue-600">
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button className="p-1 rounded-md bg-red-600">
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
};

export default Contact;
