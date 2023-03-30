import Image from "next/image";
import React from "react";

const Contact = ({ name, email, phone, isFavourite }) => {
  return (
    <div className="mb-2 p-2 flex flex-row items-center gap-x-2 content-start border border-slate-100 rounded-xl md:gap-x-6">
      <div className="flex h-10">
        <Image
          loader={({ src }) =>
            `https://ui-avatars.com/api/?name=${encodeURIComponent(src)}`
          }
          src={name}
          alt={`${name} image`}
          width={50}
          height={50}
        />
      </div>
      <div>
        <h3 className="text-lg font-bold text-yellow-400">{name}</h3>
        <h5 className="text-sm text-slate-100">{email}</h5>
        <h5 className="text-sm text-slate-100">{phone}</h5>
      </div>
      <div className="flex flex-col text-xs">
        <button
          className={`p-1 rounded-md ${
            isFavourite
              ? "bg-yellow-400 text-slate-950"
              : "text-yellow-400 bg-slate-950 border border-yellow-400"
          } `}
        >
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
