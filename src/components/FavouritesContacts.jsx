import React from "react";
import Contact from "./ui/Contact";

const FavouritesContacts = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <h3 className="font-bold text-neutral-300">Favourites</h3>
      <Contact />
    </div>
  );
};

export default FavouritesContacts;
