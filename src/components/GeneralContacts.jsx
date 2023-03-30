import React from "react";
import Contact from "./ui/Contact";

const GeneralContacts = () => {
  return (
    <div className="my-2 flex flex-col items-center gap-y-4">
      <h3 className="font-bold text-neutral-300">General Contacts</h3>
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

export default GeneralContacts;
