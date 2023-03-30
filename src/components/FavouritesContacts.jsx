import React from "react";
import Contact from "./ui/Contact";

const FavouritesContacts = () => {
  return (
    <div className="my-2 py-2 px-4 flex flex-col items-center gap-y-4">
      <h3 className="font-bold text-neutral-300">Favourites</h3>
      <div className="lg:flex lg:flex-row lg:flex-wrap lg:gap-4 lg:justify-center lg:flex-grow">
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  );
};

export default FavouritesContacts;
